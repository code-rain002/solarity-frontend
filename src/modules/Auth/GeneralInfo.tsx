import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Image from "next/image";

import Dropzone from 'react-dropzone'

import { AddressButton, WalletButton, PrimaryButton, BackButton } from "components/Common/Buttons";

import Logo from "components/Common/Logo";

import { AddressImg, AvatarImg, DaoBGImg, DaoImg1, DaoImg2, DaoPicImg, DiscordImg, EthereumImg, GalleryImg, GithubImg, PolygonImg, ProfileImg, TwitterImg } from "components/Common/Images";
import { DomainInput, SharedInput } from "components/Common/Forms";
import { AvatarPanel, DaoPanel } from "components/Common/Panels";
import { DiscordLink } from "./Links";
import { TwitterLink } from "./Links/TwitterLink";
import axios from 'axios'

import {
  MAX_METADATA_LEN,
  useConnection,
  IMetadataExtension,
  MetadataCategory,
  useConnectionConfig,
  Creator,
  shortenAddress,
  MetaplexModal,
  MetaplexOverlay,
  MetadataFile,
  StringPublicKey,
  WRAPPED_SOL_MINT,
  getAssetCostToStore,
  LAMPORT_MULTIPLIER,
  Attribute,
  Wallet,
  ConnectButton,
} from '@oysterr/common';

import { useWallet } from '@solana/wallet-adapter-react';
import { Connection } from '@solana/web3.js';
import { MintLayout } from '@solana/spl-token';
// import { useHistory, useParams } from 'react-router-dom';

import { mintNFT } from 'actions';
import { updateNFT } from 'actions'; // This is update function

export const GeneralInfo = () => {
  const [attributes, setAttributes] = useState<IMetadataExtension>({
    name: '',
    symbol: 'PST',
    collection: '',
    description: '',
    external_url: '',
    image: '',
    animation_url: undefined,
    attributes: undefined,
    seller_fee_basis_points: 0,
    creators: [],
    properties: {
      files: [],
      category: MetadataCategory.Image,
    },
  });
  const connection = useConnection();
  const { endpoint } = useConnectionConfig();
  
  const publicKey = localStorage.getItem('publickey');
  // const { publicKey, connected } = useWallet();
  const wallet = useWallet();
  // const [alertMessage, setAlertMessage] = useState<string>();
  // const { step_param }: { step_param: string } = useParams();
  // const history = useHistory();

  const [step, setStep] = useState<Number>(0);
  const [files, setFiles] = useState<File[]>(null);
  const [loadedFiles, setLoadedFiles] = useState<any[]>([]);
  const [inputValue, setInputValue] = useState<String>('');
  const [title, setTitle] = useState<String>('');
  const [selectedAvatar, setSelectedAvatar] = useState<File>(null);

  const router = useRouter();
  const mint = async () => {
    const metadata = {
      name: attributes.name,
      symbol: attributes.symbol,
      creators: attributes.creators,
      collection: attributes.collection,
      description: attributes.description,
      sellerFeeBasisPoints: attributes.seller_fee_basis_points,
      image: attributes.image,
      animation_url: attributes.animation_url,
      attributes: attributes.attributes,
      external_url: attributes.external_url,
      properties: {
        files: attributes.properties.files,
        category: attributes.properties?.category,
      },
    };
    setAttributes({...attributes, name: inputValue});
    alert(process.env.NEXT_PUBLIC_BACKEND_URL);
    axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/tmeta?includeDao=true`).then(response => {
      let resp = response.data;
      console.log("response", resp)
      // alert(resp['user']['twitterConnected'])
      let nftattributes:Attribute[] = [];
      if( 'twitterConnected' in resp['user'] ){
        let nAttribute : Attribute = {
          'trait_type' : 'Twitter',
          'display_type' : undefined,
          'value': String(resp['user']['twitterUsername'])
        };
        nftattributes.push(nAttribute)
      }
      resp['user']['daos'].forEach(element => {
        let nAttribute : Attribute = {
          'trait_type' : 'DAO',
          'display_type' : undefined,
          'value': String(element['name'])
        };
        nftattributes.push(nAttribute);
      });
      // setAttributes({
      //   ...attributes,
      //   attributes: nftattributes,
      // });
    });
    // setStepsVisible(false);
    // setMinting(true);

    try {
      // I used the same frontend for nft mint and update.
      const _nft = await mintNFT(
      // const _nft = await updateNFT(
        connection,
        wallet,
        endpoint.name,
        files,
        metadata,
        attributes.properties?.maxSupply,
      );
      // if (_nft) setNft(_nft);
      // setAlertMessage('');
    } catch (e: any) {
      // setAlertMessage(e.message);
    } finally {
      // setMinting(false);
    }
  };

  const onLoadAvatar = (files) => {
    setFiles(files);
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        let listFiles = loadedFiles;
        listFiles.push(reader.result);
        setLoadedFiles([...listFiles]);
        console.log(loadedFiles);
      }
    };

    reader.readAsDataURL(files[0]);
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-[20px] items-baseline">
        {step == 0?<div className=" pr-[0] lg:pr-[7%]">
          <div className="relative w-auto my-6 mx-auto">
            {/*content*/}
            <div className="rounded-[30px] min-h-[calc(100vh-100px)] shadow-lg relative flex flex-col w-full bg-[#141416] outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between pt-8 pl-[32px] pr-[32px] lg:p-14 lg:pb-0 lg:pr-12 rounded-t">
                <h3 className="text-[28px] lg:text-[30px] text-white font-medium tracking-[0.02em]">
                  Creating a passport
                </h3>
                <AddressButton caption={publicKey?publicKey:""} icon={AddressImg} onClick={null} />
              </div>
              {/*body*/}
              <div className="relative p-[32px] lg:p-14 flex-auto">
                <div>
                  <DomainInput changeValue={setInputValue} />
                </div>
                <div className="mt-6">
                  <SharedInput changeValue={setTitle} caption="Input your title" />
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-3">
                  <div className="mt-6 mb-3 xl:mt-6 xl:mb-6 xl:text-left">
                    <TwitterLink />
                  </div>
                  <div className="my-3 xl:my-6 xl:text-center">
                    <DiscordLink />
                  </div>
                  <div className="my-3 xl:my-6 xl:text-right">
                    <WalletButton caption="Connect" icon={GithubImg} onClick={null} styles="!w-[100%] xl:!w-[95%]" />
                  </div>
                </div>
                <div className="grid grid-cols-1 mt-[25px] lg:mt-[30px]">
                  <div className="my-3">
                    <WalletButton caption="Connect ETH wallet" icon={EthereumImg} onClick={null} styles="!w-[100%]" description="optional" />
                  </div>
                  <div className="my-3 hidden lg:block">
                    <WalletButton caption="Connect Polygon wallet" icon={PolygonImg} onClick={null} styles="!w-[100%]" description="optional" />
                  </div>
                </div>
              </div>
              <div className="w-full px-[32px] py-[32px] lg:px-14 lg:py-8 flex-auto flex items-end">
                <div className="inline-block w-[20%] pr-2">
                  <BackButton onClick={() => router.push('/')} styles="rounded-[15px]" />
                </div>
                <div className="inline-block w-[80%] pl-2">
                  <PrimaryButton caption="Continue" icon="" bordered={false} onClick={() => setStep(1)} disabled={false} styles="rounded-[15px]" />
                </div>
              </div>
            </div>
          </div>
        </div>:""}
        {step == 1?<div className=" pr-[0] lg:pr-[7%]">
          <div className="relative w-auto my-6 mx-auto">
            {/*content*/}
            <div className="rounded-[30px] min-h-[calc(100vh-100px)] shadow-lg relative flex flex-col w-full bg-[#141416] outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between pt-8 pl-[32px] pr-[32px] lg:p-14 lg:pb-0 lg:pr-12 rounded-t">
                <h3 className="text-[28px] lg:text-[30px] text-white font-medium tracking-[0.02em]">
                  DAOs you&apos;re already in 
                </h3>
                <AddressButton caption="Ak...VqT9" icon={AddressImg} onClick={null} />
              </div>
              {/*body*/}
              <div className="relative p-[32px] lg:p-14 flex-auto">
                <div className="grid grid-cols-2 xl:grid-cols-3 max-h-[510px] overflow-scroll">
                  <div className="p-2">
                    <DaoPanel imageSrc={DaoPicImg} backSrc={DaoBGImg} title="Solana Money Boys" />
                  </div>
                  <div className="p-2">
                    <DaoPanel imageSrc={DaoPicImg} backSrc={DaoBGImg} title="Solana Money Boys" />
                  </div>
                  <div className="p-2">
                    <DaoPanel imageSrc={DaoPicImg} backSrc={DaoBGImg} title="Solana Money Boys" />
                  </div>
                </div>
              </div>
              <div className="w-full px-[32px] py-[32px] lg:px-14 lg:py-8 flex-auto flex items-end">
                <div className="inline-block w-[20%] pr-2">
                  <BackButton onClick={() => setStep(0)} styles="rounded-[15px]" />
                </div>
                <div className="inline-block w-[80%] pl-2">
                  <PrimaryButton caption="Continue" icon="" bordered={false} onClick={() => setStep(2)} disabled={false} styles="rounded-[15px]" />
                </div>
              </div>
            </div>
          </div>
        </div>:""}
        {step == 2?<div className=" pr-[0] lg:pr-[7%]">
          <div className="relative w-auto my-6 mx-auto">
            {/*content*/}
            <div className="rounded-[30px] min-h-[calc(100vh-100px)] shadow-lg relative flex flex-col w-full bg-[#141416] outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between pt-8 pl-[32px] pr-[32px] lg:p-14 lg:pb-0 lg:pr-12 rounded-t">
                <h3 className="text-[28px] lg:text-[30px] text-white font-medium tracking-[0.02em]">
                  Choose profile picture
                </h3>
                <AddressButton caption="Ak...VqT9" icon={AddressImg} onClick={null} />
              </div>
              <div className="relative p-[32px] lg:p-14 flex-auto">
                <div className="mb-10">
                  <Dropzone onDrop={acceptedFiles => { onLoadAvatar(acceptedFiles);}}>
                    {({getRootProps, getInputProps}) => (
                      <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <label
                            className="flex w-full h-24 px-4 transition bg-transparent border-2 border-white/20 border-dashed rounded-md appearance-none cursor-pointer hover:border-white/30 focus:outline-none">
                            <span className="flex items-center space-x-2 mr-3">
                              <Image src={GalleryImg} />
                            </span>
                            <span className="flex items-center space-x-2">
                                {files?<span className="font-medium text-[#f3f3f3]">
                                    <label className="text-primary">{files.length}</label> file&#40;s&#41; selected
                                    <br></br>
                                    <label className="text-[14px] text-white/30">Supports&#58; JPEG, JPEG2000, PNG</label>
                                </span>:<span className="font-medium text-[#f3f3f3]">
                                    Drop image here or&nbsp;<label className="text-primary">browse</label>
                                    <br></br>
                                    <label className="text-[14px] text-white/30">Supports&#58; JPEG, JPEG2000, PNG</label>
                                </span>}
                            </span>
                        </label>
                      </div>
                    )}
                  </Dropzone>
                </div>
                <div className="grid grid-cols-2 xl:grid-cols-3 mt-5 max-h-[35vh] overflow-scroll">
                  <div className="p-2">
                    <AvatarPanel imageSrc={ProfileImg} title="RESSURECTION..." onClick={() => setSelectedAvatar(null)} />
                  </div>
                  <div className="p-2">
                    <AvatarPanel imageSrc={ProfileImg} title="RESSURECTION..." onClick={() => setSelectedAvatar(null)} />
                  </div>
                  {loadedFiles.map((imgBlob) => {
                    return (<div className="p-2"><AvatarPanel imageSrc={imgBlob} title="RESSURECTION..." onClick={() => setSelectedAvatar(imgBlob)} selected={imgBlob == selectedAvatar} /></div>)
                  })}
                </div>
              </div>
              <div className="w-full p-[32px] lg:p-14 flex-auto flex items-end px-[32px] py-[32px] lg:px-14 lg:py-8">
                <div className="inline-block w-[20%] pr-2">
                  <BackButton onClick={() => setStep(1)} styles="rounded-[15px]" />
                </div>
                <div className="inline-block w-[80%] pl-2">
                  <PrimaryButton caption="Continue" icon="" bordered={false} onClick={null} disabled={false} styles="rounded-[15px]" />
                </div>
              </div>
            </div>
          </div>
        </div>:""}
        <div className="hidden lg:block text-center">
          <Logo />
          <div className="relative h-[calc(100vh-180px)]">
            <div className="absolute w-[576px] h-[384px] bg-[#159C6C] left-0 right-0 top-0 bottom-0 m-auto rounded-[40px] passport-card z-10">
              <div className="absolute w-[576px] h-[268px] left-0 right-0 top-0 bottom-0 mx-auto rounded-[40px] passport-body">
                <div className="mt-[45px]">
                  <Image src={AvatarImg} />
                </div>
                <div className="mt-[18px]">
                  <span className="text-white/80 text-[24px] z-[30]">{inputValue?inputValue:"Enter your domain"}</span>
                </div>
                <div className="mt-[5px]">
                  <span className="text-white/80 text-[18px] z-[30]">{title?title:"Enter your title"}</span>
                </div>
                <div className="mt-[3px]">
                  <span className="text-white/60 text-[16px] z-[30]">Connect your socials</span>
                </div>
              </div>
              <div className="grid grid-cols-2 mt-[268px] h-[116px]">
                <div className="z-10 passport-liner !pt-3">
                  <span className="text-white/60">Wallets</span>
                  <div className="mt-3"><Image src={AddressImg}/></div>
                </div>
                <div className="z-10 !pt-3">
                  <span className="text-white/60">Your DAOs</span>
                  <div className="mt-2 justify-between relative margin-auto">
                    <div className="absolute left-0 right-0 -ml-[30px]"><Image src={DaoImg2} /></div>
                    <div className="absolute left-0 right-0 ml-[25px]"><Image src={DaoImg1} /></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="eclipse-1 absolute"></div>
            <div className="eclipse-2 absolute"></div>
          </div>
        </div>
      </div>
    </>
  );
};
