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
  Metadata,
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
import { METADATA } from 'oyster-common';
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

export const updateNFT = async (
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
  progressCallback: Dispatch<SetStateAction<number>>,
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


  // ipfs metadata link
  const storageLink = `${gatewayUrl}/ipfs/${metadataCid}`

  const { instructions: pushInstructions, signers: pushSigners } =
  await prepPayForFilesTxn(wallet, realFiles);

  const TOKEN_PROGRAM_ID = programIds().token;
  const payerPublicKey = wallet.publicKey.toBase58();
  
  const instructions: TransactionInstruction[] = [...pushInstructions];
  const signers: Keypair[] = [...pushSigners];

  const updateInstructions: TransactionInstruction[] = [];
  const updateSigners: Keypair[] = [];
  // const nftMintAccount = new PublicKey("")
  const mintKey = "HWc5ygB7pfdctXdi73UNbbpaMnZLWQRbPZspMofA2uzF" // This address of nft will be updated.
  const metadataData = await getMetadata(mintKey);
  alert(metadataData)
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

  // Mint metadata to blockchain
  // const metadataAccount = await createMetadataV2(
  //   new DataV2({
  //     symbol: metadata.symbol,
  //     name: metadata.name,
  //     uri: ' '.repeat(64),  // blank url
  //     sellerFeeBasisPoints: metadata.sellerFeeBasisPoints,
  //     creators: metadata.creators,
  //     collection: metadata.collection
  //       ? new Collection({
  //           key: new PublicKey(metadata.collection).toBase58(),
  //           verified: false,
  //         })
  //       : null,
  //     uses: metadata.uses || null,
  //   }),
  //   payerPublicKey,
  //   mintKey,
  //   payerPublicKey,
  //   instructions,
  //   wallet.publicKey.toBase58(),
  // );

  // try {
  //   const { txid } = await sendTransactionWithRetry(
  //     connection,
  //     wallet,
  //     instructions,
  //     signers,
  //     'single',
  //   );
  // } catch {
  //   // ignore
  // }
  

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
    metadataData
  );

  // updateInstructions.push(
  //   Token.createMintToInstruction(
  //     TOKEN_PROGRAM_ID,
  //     toPublicKey(mintKey),
  //     toPublicKey(recipientKey),
  //     toPublicKey(payerPublicKey),
  //     [],
  //     1,
  //   ),
  // );

  // // In this instruction, mint authority will be removed from the main mint, while
  // // minting authority will be maintained for the Printing mint (which we want.)
  // await createMasterEditionV3(
  //   maxSupply !== undefined ? new BN(maxSupply) : undefined,
  //   mintKey,
  //   payerPublicKey,
  //   payerPublicKey,
  //   payerPublicKey,
  //   updateInstructions,
  // );

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


    await sendTransactionWithRetry(
      connection,
      wallet,
      updateInstructions,
      updateSigners,
    );

  // const apiKey = "b483a27821eb49bb2766"
  // const secret = "3ddd19f7cbd5dc23bf74144f4e82445c2bd49cd3710ed67a365f4fa60b2dcf21"
  // const jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJkZDgxNTkyYy1kN2FkLTRlYTMtYjk2Mi0wMDFhNTFkNWMyYmMiLCJlbWFpbCI6ImluZm8uaW5vdmFpc2lvbnRpbUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlfSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiYjQ4M2EyNzgyMWViNDliYjI3NjYiLCJzY29wZWRLZXlTZWNyZXQiOiIzZGRkMTlmN2NiZDVkYzIzYmY3NDE0NGY0ZTgyNDQ1YzJiZDQ5Y2QzNzEwZWQ2N2EzNjVmNGZhNjBiMmRjZjIxIiwiaWF0IjoxNjUwODI5NjcxfQ.1_pj5PV-P9mwsAj6LGrC7qAvaVeQAtEKkjZ5-EKTw34"
  // const gatewayUrl = `https://ipfs.io`

  // const imageCid = await uploadMedia(realFiles[0], jwt);
  // console.log('uploaded image: ', `${gatewayUrl}/ipfs/${imageCid}`);
  // await sleep(500);

  // const mediaUrl = `${gatewayUrl}/ipfs/${imageCid}`;
  // metadataContent.image = mediaUrl;
  // metadataContent.properties.files = metadataContent.properties.files.map(f => {
  //   return { ...f, uri: mediaUrl };
  // });

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
  // TODO:
  // 1. Jordan: --- upload file and metadata to storage API
  // 2. pay for storage by hashing files and attaching memo for each file
  alert('end')
  
  return;
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
