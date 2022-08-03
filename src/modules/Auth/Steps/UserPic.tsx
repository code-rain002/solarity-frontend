import React, { useEffect, useState } from "react";
import { useDispatch, RootStateOrAny, useSelector } from "react-redux";
import { useRouter } from "next/router";
import axios from "axios";

import Image from "next/image";
import Dropzone from 'react-dropzone'
import cloudinary from "cloudinary/lib/cloudinary";

import { AddressButton, WalletButton, PrimaryButton, BackButton } from "components/Common/Buttons";
import { AddressImg, GalleryImg } from "components/Common/Images";
import { AvatarPanel, NftPanel } from "components/Common/Panels";
import { minifyAddress } from "utils";
import { getNfts } from '../../../hooks'

import { setProfilePic, setUploadPic, undoSetupStep } from '../../../redux/slices/profileSlice'
import { startLoadingApp, stopLoadingApp } from '../../../redux/slices/commonSlice'
import { showErrorToast, showSuccessToast } from "utils";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_API_SECRET
});

const UserPic = (props) => {
  const dispatch = useDispatch()
  const router = useRouter();
  const { setAvatar, avatar, goStep } = props
  const { userInfo, loading } = useSelector(
    (state: RootStateOrAny) => ({
      userInfo: state.auth.userInfo,
      loading: state.common.appLoading
    })
  );
  const [nfts, nftLoading, nftError, fetchNFTs] = getNfts(
    userInfo.domain,
    userInfo.solanaAddress,
    true
  );
  // bug code
  const publicKey = localStorage.getItem('publickey');
  const walletType = localStorage.getItem('type');

  const miniPublicKey = minifyAddress(publicKey, 3);
  const provider = (window as any).phantom.solana;

  const [files, setFiles] = useState<File[]>(null);
  const [loadedFiles, setLoadedFiles] = useState<any[]>([]);
  const [selectedAvatar, setSelectedAvatar] = useState<File>(null);
  const [selectedNft, setSelectedNft] = useState<any>(null);

  const [image, setImage] = useState("");
  const [imageData, setImageData] = useState([]);

  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    fetchNFTs();
  }, []);

  useEffect(() => {
    if (selectedNft) {
      dispatch(startLoadingApp());
      dispatch(
        setProfilePic({
          data: selectedNft,
          successFunction: () => {
            showSuccessToast("You profile pic has been updated");
          },
          errorFunction: () => {
            showErrorToast("Unable to update the profile pic");
          },
          finalFunction: () => {
            dispatch(stopLoadingApp());
            setSelectedAvatar(null)
          },
        })
      );
    }
  }, [selectedNft])

  useEffect(() => {
    if (selectedAvatar) {
      dispatch(startLoadingApp());
      dispatch(
        setUploadPic({
          data: selectedAvatar,
          successFunction: () => {
            showSuccessToast("You profile pic has been updated");
          },
          errorFunction: () => {
            showErrorToast("Unable to update the profile pic");
          },
          finalFunction: () => {
            dispatch(stopLoadingApp());
            setSelectedNft(null)
          },
        })
      );
    }
  }, [selectedAvatar])

  const onImageLoad = (tempFiles) => {
    setFiles(tempFiles)
    const listFiles = []
    tempFiles.forEach(async (file: any) => {
      let reader = new FileReader();
      reader.onload = (event) => {
        if (reader.readyState === 2) {
          listFiles.push({
            fileBlob: reader.result,
            fileName: file.name,
            fileSize: file.size,
            filePath: file.path
          });
          setLoadedFiles([...loadedFiles, ...listFiles]);
        }
      };
      reader.readAsDataURL(file);
    });
  }

  const register = async () => {
    await uploadImage()
  }

  const uploadImage = async () => {
    setIsUploading(true);
    
    const data = new FormData();
    data.append("file", selectedAvatar);
    data.append("upload_preset", process.env.NEXT_PUBLIC_PRESET_NAME);
    data.append("cloud_name", process.env.NEXT_PUBLIC_CLOUD_NAME);
    data.append("folder", "assets/avatars");
    try {
      const resp = await axios.post(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`, data);
      console.log(resp)
      dispatch
      setIsUploading(false);
    } catch (err) {
      setIsUploading(false);
      console.log("errr : ", err);
    }
  }

  // const deleteImage = async (e) => {
  //   e.preventDefault();
  //   cloudinary.v2.uploader.destroy(imageData.public_id, function (error, result) {
  //     console.log(result, error)
  //   })
  //     .then(resp => console.log(resp))
  //     .catch(_err => console.log("Something went wrong, please try again later."));
  // }

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
            <AddressButton caption={miniPublicKey ? miniPublicKey : ""} icon={AddressImg} onClick={null} />
          </div>
          <div className="relative p-[32px] lg:p-14 flex-auto">
            <div className="mb-10">
              <Dropzone onDrop={acceptedFiles => { onImageLoad(acceptedFiles); }}>
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
            <div className="overflow-scroll">
              {
                isUploading ?
                  <h3 className="text-center text-[24px] lg:text-[26px] text-white font-medium tracking-[0.02em]">
                    Uploading Images...
                  </h3>
                  :
                  <div className="grid grid-cols-2 xl:grid-cols-3 mt-5 max-h-[35vh]">
                    {
                      loadedFiles.map((image, index) => (
                        <div className="p-2" key={index}>
                          <AvatarPanel
                            imageUrl={image.fileBlob}
                            title={image.fileName}
                            onClick={() => {
                              setAvatar(image.fileBlob)
                              setSelectedAvatar(image)
                            }}
                            selected={image == selectedAvatar}
                          />
                        </div>)
                      )
                    }
                  </div>
              }
              {
                nftLoading ?
                  <h3 className="text-center text-[24px] lg:text-[26px] text-white font-medium tracking-[0.02em]">
                    Loading NFTs...
                  </h3>
                  :
                  <div className="grid grid-cols-2 xl:grid-cols-3 mt-5 max-h-[35vh]">
                    {
                      nfts.map(({ type, mintAddress, contractAddress, tokenId, name, image, collectionName }, index) => (
                        <div className="p-2" key={index}>
                          <NftPanel
                            image={image}
                            name={name}
                            collectionName={collectionName}
                            type={type}
                            key={index}
                            selected={(() => {
                              if (!selectedNft || !selectedNft.imageNetwork) return false;
                              if (selectedNft.imageNetwork === "Ethereum") {
                                return (
                                  selectedNft.tokenId == tokenId &&
                                  selectedNft.contractAddress == contractAddress
                                );
                              }
                              return selectedNft.mintAddress == mintAddress;
                            })()}
                            onClick={() => {
                              setAvatar(image)
                              setSelectedNft({
                                imageNetwork: type,
                                mintAddress,
                                contractAddress,
                                tokenId,
                              });
                            }}
                          />
                        </div>
                      ))
                    }
                  </div>
              }
            </div>
          </div>
          <div className="w-full p-[32px] lg:p-14 flex-auto flex items-end px-[32px] py-[32px] lg:px-14 lg:py-8">
            <div className="inline-block w-[20%] pr-2">
              <BackButton onClick={() => goStep(2)} styles="rounded-[15px]" />
            </div>
            <div className="inline-block w-[80%] pl-2">
              <PrimaryButton caption="Mint" icon="" bordered={false} onClick={() => register()} disabled={nftLoading || avatar === null ? true : false} styles="rounded-[15px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPic;