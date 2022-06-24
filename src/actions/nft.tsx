import {
  ARWEAVE_UPLOAD_ENDPOINT,
  Attribute,
  createAssociatedTokenAccountInstruction,
  createMasterEditionV3,
  createMetadataV2,
  updateMetadataV2,
  getMetadata,
  createMint,
  Creator,
  ENDPOINT_NAME,
  findProgramAddress,
  getAssetCostToStore,
  notify,
  programIds,
  sendTransactionWithRetry,
  StringPublicKey,
  toPublicKey,
  WalletSigner,
} from '@oysterr/common';
import React, { createElement, Dispatch, SetStateAction } from 'react';
import { MintLayout, Token } from '@solana/spl-token';
import {
  Connection,
  Keypair,
  PublicKey,
  SystemProgram,
  TransactionInstruction,
} from '@solana/web3.js';
import crypto from 'crypto';

import fetch from 'node-fetch';
import FormData from 'form-data';

import { AR_SOL_HOLDER_ID } from '../utils/ids';
import BN from 'bn.js';
import {
  Collection,
  DataV2,
  Uses,
} from '@metaplex-foundation/mpl-token-metadata';
// import { Blob } from 'buffer';

const RESERVED_TXN_MANIFEST = 'manifest.json';
const RESERVED_METADATA = 'metadata.json';

interface IArweaveResult {
  error?: string;
  messages?: Array<{
    filename: string;
    status: 'success' | 'fail';
    transactionId?: string;
    error?: string;
  }>;
}

async function sleep(ms: number): Promise<void> {
  console.log('waiting');
  return new Promise(resolve => setTimeout(resolve, ms));
}

const uploadToArweave = async (data: FormData): Promise<IArweaveResult> => {
  const resp = await fetch(ARWEAVE_UPLOAD_ENDPOINT, {
    method: 'POST',
    // @ts-ignore
    body: data,
  });
  if (!resp.ok) {
    return Promise.reject(
      new Error(
        'Unable to upload the artwork to Arweave. Please wait and then try again.',
      ),
    );
  }

  const result: IArweaveResult = await resp.json();

  if (result.error) {
    return Promise.reject(new Error(result.error));
  }

  return result;
};

const uploadMedia = async (media : File, jwt) : Promise<string>=> {
  const data = new FormData();
  data.append('file', media);

  const res = await fetch(`https://api.pinata.cloud/pinning/pinFileToIPFS`, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
    method: 'POST',
    body: data,
  });

  const json = await res.json();
  return json.IpfsHash;
}

export const mintNFT = async (
  connection: Connection,
  wallet: WalletSigner | undefined,
  endpoint: ENDPOINT_NAME,
  files: File[],
  metadata: {
    name: string;
    symbol: string;
    description: string;
    image: string | undefined;
    animation_url: string | undefined;
    attributes: Attribute[] | undefined;
    external_url: string;
    properties: any;
    creators: Creator[] | null;
    sellerFeeBasisPoints: number;
    collection?: string;
    uses?: Uses;
  },
  maxSupply?: number,
): Promise<{
  metadataAccount: StringPublicKey;
} | void> => {
  if (!wallet?.publicKey) return;

  const metadataContent = {
    name: metadata.name,
    symbol: metadata.symbol,
    description: metadata.description,
    seller_fee_basis_points: metadata.sellerFeeBasisPoints,
    image: metadata.image,
    animation_url: metadata.animation_url,
    attributes: metadata.attributes,
    external_url: metadata.external_url,
    properties: {
      ...metadata.properties,
      creators: metadata.creators?.map(creator => {
        return {
          address: creator.address,
          share: creator.share,
        };
      }),
    },
    collection: metadata.collection
      ? new PublicKey(metadata.collection).toBase58()
      : null,
    use: metadata.uses ? metadata.uses : null,
  };
  
  const realFiles: File[] = [
    ...files,
    new File([JSON.stringify(metadataContent)], RESERVED_METADATA),
  ];

  const { instructions: pushInstructions, signers: pushSigners } =
    await prepPayForFilesTxn(wallet, realFiles);

  // progressCallback(1);

  const TOKEN_PROGRAM_ID = programIds().token;

  // Allocate memory for the account
  const mintRent = await connection.getMinimumBalanceForRentExemption(
    MintLayout.span,
  );
  // const accountRent = await connection.getMinimumBalanceForRentExemption(
  //   AccountLayout.span,
  // );

  // This owner is a temporary signer and owner of metadata we use to circumvent requesting signing
  // twice post Arweave. We store in an account (payer) and use it post-Arweave to update MD with new link
  // then give control back to the user.
  // const payer = new Account();
  const payerPublicKey = wallet.publicKey.toBase58();
  const instructions: TransactionInstruction[] = [...pushInstructions];
  const signers: Keypair[] = [...pushSigners];

  // This is only temporarily owned by wallet...transferred to program by createMasterEdition below
  const mintKey = createMint(
    instructions,
    wallet.publicKey,
    mintRent,
    0,
    // Some weird bug with phantom where it's public key doesnt mesh with data encode wellff
    toPublicKey(payerPublicKey),
    toPublicKey(payerPublicKey),
    // null,
    // toPublicKey("GF8vm4xnizE4Po4LeBJakvo7xrH9MSBo12VTtLgSRv1f"),
    signers,
  ).toBase58();

  const recipientKey = (
    await findProgramAddress(
      [
        wallet.publicKey.toBuffer(),
        programIds().token.toBuffer(),
        toPublicKey(mintKey).toBuffer(),
      ],
      programIds().associatedToken,
    )
  )[0];

  createAssociatedTokenAccountInstruction(
    instructions,
    toPublicKey(recipientKey),
    wallet.publicKey,
    wallet.publicKey,
    toPublicKey(mintKey),
  );
  console.log("testconn", connection)
  
  console.log("mintKey")
  console.log(mintKey)
  console.log(instructions)
  // mintKey = "CkX1VefqehxSqLYUdqtCRkaTJVLtFSEohosBysAffnkE"

  // Mint metadata to blockchain
  const metadataAccount = await createMetadataV2(
    new DataV2({
      symbol: metadata.symbol,
      name: metadata.name,
      uri: ' '.repeat(64),  // blank url
      sellerFeeBasisPoints: metadata.sellerFeeBasisPoints,
      creators: metadata.creators,
      collection: metadata.collection
        ? new Collection({
            key: new PublicKey(metadata.collection).toBase58(),
            verified: false,
          })
        : null,
      uses: metadata.uses || null,
    }),
    payerPublicKey,
    mintKey,
    payerPublicKey,
    instructions,
    wallet.publicKey.toBase58(),
  );
  // alert(metadataAccount)
  // progressCallback(2);
  // TODO: enable when using payer account to avoid 2nd popup
  // const block = await connection.getRecentBlockhash('singleGossip');
  // instructions.push(
  //   SystemProgram.transfer({
  //     fromPubkey: wallet.publicKey,
  //     toPubkey: payerPublicKey,
  //     lamports: 0.5 * LAMPORTS_PER_SOL // block.feeCalculator.lamportsPerSignature * 3 + mintRent, // TODO
  //   }),
  // );
  // alert()
  try {
    const { txid } = await sendTransactionWithRetry(
      connection,
      wallet,
      instructions,
      signers,
      'single',
    );
  } catch {
    // ignore
  }
  

  // alert()
  // progressCallback(3);
  try {
    await connection.confirmTransaction(txid, 'max');
    // progressCallback(4);
  } catch {
    // ignore
  }
  // // Force wait for max confirmations
  // await connection.confirmTransaction(txid, 'max');
  // await connection.getParsedConfirmedTransaction(txid, 'confirmed');
  // progressCallback(5);
  // this means we're done getting AR txn setup. Ship it off to ARWeave!
  // const data = new FormData();
  // data.append('transaction', txid);
  // data.append('env', endpoint);

  // const tags = realFiles.reduce(
  //   (acc: Record<string, Array<{ name: string; value: string }>>, f) => {
  //     acc[f.name] = [{ name: 'mint', value: mintKey }];
  //     return acc;
  //   },
  //   {},
  // );
  // data.append('tags', JSON.stringify(tags));
  // realFiles.map(f => data.append('file[]', f));
  // console.log("tags", tags)
  console.log("realfiles", realFiles)
  // console.log("data", data)
  // alert("tags")
  // // TODO: convert to absolute file name for image

  // const result: IArweaveResult = await uploadToArweave(data);
  // const nftStorageKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDJlM2RCQjZiODFFYUUyQTcxNjZjRjIwMTNkM0QyRTg0QUNhMzI3YkIiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1MDY5OTAzNjQxMCwibmFtZSI6InNvbGFuYSJ9.-4ZCeQqeUEbmLJRsX1hCEc3rEiOxoW6s41Q_RJiwobE"
  // const client = new NFTStorage({ token: nftStorageKey })
  // async function uploadMedia(media) {
  //   try {
  //     const readStream = fs.createReadStream(media);
  //     log.info(`Media Upload ${media}`);
  //     // @ts-ignore - the Blob type expects a web ReadableStream, but also works with node Streams.
  // var reader = new FileReader();
  // reader.addEventListener('load', readFile);
  // reader.readAsText(file);
  // alert()

  // SSS
  const apiKey = "b483a27821eb49bb2766"
  const secret = "3ddd19f7cbd5dc23bf74144f4e82445c2bd49cd3710ed67a365f4fa60b2dcf21"
  const jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJkZDgxNTkyYy1kN2FkLTRlYTMtYjk2Mi0wMDFhNTFkNWMyYmMiLCJlbWFpbCI6ImluZm8uaW5vdmFpc2lvbnRpbUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlfSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiYjQ4M2EyNzgyMWViNDliYjI3NjYiLCJzY29wZWRLZXlTZWNyZXQiOiIzZGRkMTlmN2NiZDVkYzIzYmY3NDE0NGY0ZTgyNDQ1YzJiZDQ5Y2QzNzEwZWQ2N2EzNjVmNGZhNjBiMmRjZjIxIiwiaWF0IjoxNjUwODI5NjcxfQ.1_pj5PV-P9mwsAj6LGrC7qAvaVeQAtEKkjZ5-EKTw34"
  const gatewayUrl = `https://ipfs.io`

  // Upload Image to net.storage
  const imageCid = await uploadMedia(realFiles[0], jwt);
  console.log('uploaded image: ', `${gatewayUrl}/ipfs/${imageCid}`);
  await sleep(500);

  const mediaUrl = `${gatewayUrl}/ipfs/${imageCid}`;
  metadataContent.image = mediaUrl;
  metadataContent.properties.files = metadataContent.properties.files.map(f => {
    return { ...f, uri: mediaUrl };
  });

  // upload metadata to net.storage
  const metadataFile = new File([JSON.stringify(metadataContent)], RESERVED_METADATA)
  const metadataCid = await uploadMedia(metadataFile, jwt); // uploaded metadata cid.
  console.log('uploaded metadata: ', `${gatewayUrl}/ipfs/${metadataCid}`);
  await sleep(500);


  // alert()
  // var reader = new FileReader();
  // const imageBlob = reader.readAsText(realFiles[0]);
  // console.log("blob",imageBlob)
  // const metadt = await client.store({
  //   name: 'Pinpie',
  //   description: 'Pin is not delicious beef!',
  //   image: realFiles[0]
  // })
//   const obj = {
//     "name": "The Sample Text",
//     "information": "This is a sample text file.",
//     "creator": "Michelle Branagah",
//     "file_url": "https://ipfs.io/ipfs/bafkreihnerljctsiyhqxw66zeilxfepprn7vkpw7dmpwnnx4didwkjfsf4"
// };
//   const metadata1 = new Blob([JSON.stringify(obj)], { type: 'application/json' });
//   alert(metadata1)
//   try {
//     const metadataCid = await client.storeBlob(metadata1);
//   } catch {
//     alert("err")
//     // ignore
//   }

  // const cid = await client.storeBlob(new Blob([imageBlob]));
  // alert(`https://${cid}.ipfs.nftstorage.link`)
  //     return `https://${cid}.ipfs.nftstorage.link`;
  //   } catch (err) {
  //     log.debug(err);
  //     throw new Error(`Media upload error: ${err}`);
  //   }
  // }

  // async function uploadMetadata(manifestJson, imageUrl, animationUrl) {
  //   try {
  //     log.info('Upload metadata');
  //     const metaData = Buffer.from(JSON.stringify(manifestJson));
  //     const cid = await client.storeBlob(new Blob([metaData]));
  //     const link = `https://${cid}.ipfs.nftstorage.link`;
  //     log.info('Upload end');
  //     if (animationUrl) {
  //       log.debug([link, imageUrl, animationUrl]);
  //     } else {
  //       log.debug([link, imageUrl]);
  //     }
  //     return [link, imageUrl, animationUrl];
  //   } catch (err) {
  //     log.debug(err);
  //     throw new Error(`Metadata upload error: ${err}`);
  //   }
  // }

  // // Copied from ipfsUpload
  // const imageUrl = `${await uploadMedia(image)}?ext=${path
  //   .extname(image)
  //   .replace('.', '')}`;
  // const animationUrl = animation
  //   ? `${await uploadMedia(animation)}?ext=${path
  //       .extname(animation)
  //       .replace('.', '')}`
  //   : undefined;
  // const manifestJson = JSON.parse(manifestBuffer.toString('utf8'));
  // manifestJson.image = imageUrl;
  // if (animation) {
  //   manifestJson.animation_url = animationUrl;
  // }

  // return uploadMetadata(manifestJson, imageUrl, animationUrl);

  // progressCallback(6);

  // const metadataFile = result.messages?.find(
  //   m => m.filename === RESERVED_TXN_MANIFEST,
  // );
  
  // ipfs metadata link
  const storageLink = `${gatewayUrl}/ipfs/${metadataCid}`


  // if (metadataFile?.transactionId && wallet.publicKey) {
  if (storageLink) {
    
    const updateInstructions: TransactionInstruction[] = [];
    const updateSigners: Keypair[] = [];

    // TODO: connect to testnet net.storage
    // Update the minted metadata.
    await updateMetadataV2(
      new DataV2({
        symbol: metadata.symbol,
        name: metadata.name,
        uri: storageLink,  // Update with uploaded metadata link.
        sellerFeeBasisPoints: metadata.sellerFeeBasisPoints,
        creators: metadata.creators,
        collection: metadata.collection
          ? new Collection({
              key: new PublicKey(metadata.collection).toBase58(),
              verified: false,
            })
          : null,
        uses: metadata.uses || null,
      }),
      undefined,
      undefined,
      mintKey,
      payerPublicKey,
      updateInstructions,
      metadataAccount,
    );

    updateInstructions.push(
      Token.createMintToInstruction(
        TOKEN_PROGRAM_ID,
        toPublicKey(mintKey),
        toPublicKey(recipientKey),
        toPublicKey(payerPublicKey),
        [],
        1,
      ),
    );

    // progressCallback(7);
    // // In this instruction, mint authority will be removed from the main mint, while
    // // minting authority will be maintained for the Printing mint (which we want.)
    await createMasterEditionV3(
      maxSupply !== undefined ? new BN(maxSupply) : undefined,
      mintKey,
      payerPublicKey,
      payerPublicKey,
      payerPublicKey,
      updateInstructions,
    );

    // TODO: enable when using payer account to avoid 2nd popup
    /*  if (maxSupply !== undefined)
      updateInstructions.push(
        setAuthority({
          target: authTokenAccount,
          currentAuthority: payerPublicKey,
          newAuthority: wallet.publicKey,
          authorityType: 'AccountOwner',
        }),
      );
*/
    // TODO: enable when using payer account to avoid 2nd popup
    // Note with refactoring this needs to switch to the updateMetadataAccount command
    // await transferUpdateAuthority(
    //   metadataAccount,
    //   payerPublicKey,
    //   wallet.publicKey,
    //   updateInstructions,
    // );

    // progressCallback(8);

    await sendTransactionWithRetry(
      connection,
      wallet,
      updateInstructions,
      updateSigners,
    );

    notify({
      message: 'Art created on Solana',
      description: (
        <a href={storageLink} target="_blank" rel="noopener noreferrer">
          Net.Storage Link
        </a>
      ),
      type: 'success',
    });

    // TODO: refund funds

    // send transfer back to user
  }
  // TODO:
  // 1. Jordan: --- upload file and metadata to storage API
  // 2. pay for storage by hashing files and attaching memo for each file
  // alert('end')
  
  return { metadataAccount };
};

export const prepPayForFilesTxn = async (
  wallet: WalletSigner,
  files: File[],
): Promise<{
  instructions: TransactionInstruction[];
  signers: Keypair[];
}> => {
  const memo = programIds().memo;

  const instructions: TransactionInstruction[] = [];
  const signers: Keypair[] = [];

  if (wallet.publicKey)
    instructions.push(
      SystemProgram.transfer({
        fromPubkey: wallet.publicKey,
        toPubkey: AR_SOL_HOLDER_ID,
        lamports: await getAssetCostToStore(files),
      }),
    );

  for (let i = 0; i < files.length; i++) {
    const hashSum = crypto.createHash('sha256');
    hashSum.update(await files[i].text());
    const hex = hashSum.digest('hex');
    instructions.push(
      new TransactionInstruction({
        keys: [],
        programId: memo,
        data: Buffer.from(hex),
      }),
    );
  }

  return {
    instructions,
    signers,
  };
};
