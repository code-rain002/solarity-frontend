import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Image from "next/image";

import Dropzone from 'react-dropzone'

import { AddressButton, WalletButton, PrimaryButton, BackButton } from "components/Common/Buttons";

import Logo from "components/Common/Logo";

import { AddressImg, AvatarImg, DaoBGImg, DaoImg1, DaoImg2, DaoPicImg, DiscordImg, EthereumImg, GalleryImg, GithubImg, PolygonImg, ProfileImg, TwitterImg } from "components/Common/Images";
import { DomainInput, SharedInput } from "components/Common/Forms";
import { AvatarPanel, DaoPanel } from "components/Common/Panels";
import { DiscordLink } from "../Links";
import { TwitterLink } from "../Links/TwitterLink";
import { minifyAddress } from "utils";

import { useDispatch, RootStateOrAny, useSelector } from "react-redux";
import { setup } from '../../../redux/slices/profileSlice'
import { startLoadingApp, stopLoadingApp } from '../../../redux/slices/commonSlice'

const UserPic = (props) => {
  const dispatch = useDispatch()
  const router = useRouter();
  const { submit } = props
  const { profileData } = useSelector(
    (state: RootStateOrAny) => ({
      profileData: state.profile.data
    })
  );

  // bug code
  const publicKey = localStorage.getItem('publickey');
  const walletType = localStorage.getItem('type');

  const miniPublicKey = minifyAddress(publicKey, 3);
  const provider = (window as any).phantom.solana;

  const [step, setStep] = useState<Number>(0);
  const [files, setFiles] = useState<File[]>(null);
  const [loadedFiles, setLoadedFiles] = useState<any[]>([]);
  const [selectedAvatar, setSelectedAvatar] = useState<File>(null);


  useEffect(() => {

  }, [])

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
    <div className=" pr-[0] lg:pr-[7%]">
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
              <Dropzone onDrop={acceptedFiles => { onLoadAvatar(acceptedFiles); }}>
                {({ getRootProps, getInputProps }) => (
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <label
                      className="flex w-full h-24 px-4 transition bg-transparent border-2 border-white/20 border-dashed rounded-md appearance-none cursor-pointer hover:border-white/30 focus:outline-none">
                      <span className="flex items-center space-x-2 mr-3">
                        <Image src={GalleryImg} />
                      </span>
                      <span className="flex items-center space-x-2">
                        {files ? <span className="font-medium text-[#f3f3f3]">
                          <label className="text-primary">{files.length}</label> file&#40;s&#41; selected
                          <br></br>
                          <label className="text-[14px] text-white/30">Supports&#58; JPEG, JPEG2000, PNG</label>
                        </span> : <span className="font-medium text-[#f3f3f3]">
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
              <BackButton onClick={() => router.push({ pathname: '/auth/register/userDaos' })} styles="rounded-[15px]" />
            </div>
            <div className="inline-block w-[80%] pl-2">
              <PrimaryButton caption="Continue" icon="" bordered={false} onClick={submit} disabled={false} styles="rounded-[15px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPic;