import React, { useEffect, useState } from "react";
import { useDispatch, RootStateOrAny, useSelector } from "react-redux";
import { useRouter } from "next/router";
import axios from "axios";

import Image from "next/image";
import Dropzone from "react-dropzone";
import cloudinary from "cloudinary/lib/cloudinary";

import {
  AddressButton,
  WalletButton,
  PrimaryButton,
  BackButton,
} from "components/Common/Buttons";
import { AddressImg, GalleryImg } from "components/Common/Images";
import { AvatarPanel, NftPanel } from "components/Common/Panels";
import { minifyAddress } from "utils";
import { getNfts } from "../../../hooks";

import {
  startLoadingApp,
  stopLoadingApp,
} from "../../../redux/slices/commonSlice";
import { showErrorToast, showSuccessToast } from "utils";
import { changeInfo } from "redux/slices/authSlice";
import { apiCaller } from "utils/fetcher";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_API_SECRET,
});

const UserPic = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { setAvatar, avatar, goStep } = props;
  const { userInfo, loading } = useSelector((state: RootStateOrAny) => ({
    userInfo: state.auth.userInfo,
    loading: state.common.appLoading,
  }));
  const [nfts, nftLoading, nftError, fetchNFTs] = getNfts(
    userInfo.domain,
    userInfo.solanaAddress,
    true
  );
  // bug code
  const publicKey = localStorage.getItem("publickey");
  const walletType = localStorage.getItem("type");

  const miniPublicKey = minifyAddress(publicKey, 3);
  const provider = (window as any).phantom.solana;

  const [files, setFiles] = useState<File[]>(null);
  const [loadedFiles, setLoadedFiles] = useState<any[]>([]);
  const [selectedAvatar, setSelectedAvatar] = useState<File>(null);
  const [selectedNft, setSelectedNft] = useState<any>(null);
  const [isNftSelected, setIsNftSelected] = useState(true);
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    fetchNFTs();
  }, []);

  const onImageLoad = (tempFiles) => {
    setFiles(tempFiles);
    const listFiles = [];
    tempFiles.forEach(async (file: any) => {
      let reader = new FileReader();
      reader.onload = (event) => {
        if (reader.readyState === 2) {
          listFiles.push({
            fileBlob: reader.result,
            fileName: file.name,
            fileSize: file.size,
            filePath: file.path,
          });
          setLoadedFiles([...loadedFiles, ...listFiles]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const onComplete = async () => {
    await uploadImage();
    // await mint();
  };

  const uploadImage = async () => {
    if (isNftSelected) {
      const payload = {
        value: selectedNft,
        type: "profileImage",
      };
      setProfileImage(payload.value);
      dispatch(changeInfo({ payload: payload }));
    } else {
      const data = new FormData();
      data.append("file", selectedAvatar);
      data.append("upload_preset", process.env.NEXT_PUBLIC_PRESET_NAME);
      data.append("cloud_name", process.env.NEXT_PUBLIC_CLOUD_NAME);
      data.append("folder", "assets/avatars");
      try {
        const resp = await axios.post(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`,
          data
        );
        const payload = {
          value: {
            link: resp.data.url,
            network: null,
            contractAddress: null,
            tokenId: null,
            mintAddress: null,
          },
          type: "profileImage",
        };
        setProfileImage(payload.value);
        await dispatch(changeInfo({ payload: payload }));
      } catch (err) {
        console.log("error : ", err);
      }
    }
  };

  useEffect(() => {
    if (profileImage) {
      register();
    }
  }, [profileImage]);

  const register = async () => {
    console.log("register: ", profileImage);
    const payload = {
      publicKey,
      walletType,
      username: userInfo.domain,
      bio: userInfo.title,
      profileImage: profileImage,
      daos: userInfo.daos,
    };
    await apiCaller
      .post("auth/register", payload)
      .then((response) => {
        mint();
        // router.push({ pathname: '/' })
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const mint = () => {
    const address = userInfo.solanaAddress;
    const mintingUrl =
      process.env.NODE_ENV === "development"
        ? process.env.NEXT_PUBLIC_LOCAL_MINTING_URL
        : process.env.NEXT_PUBLIC_MINTING_URL;
    window.location.href = `${mintingUrl}`;
  };

  // const deleteImage = async (e) => {
  //   e.preventDefault();
  //   cloudinary.v2.uploader.destroy(imageData.public_id, function (error, result) {
  //     console.log(result, error)
  //   })
  //     .then(resp => console.log(resp))
  //     .catch(_err => console.log("Something went wrong, please try again later."));
  // }

  return (
    <>
      <div className="flex items-start justify-between pt-8 pl-8 pr-8 lg:p-10 lg:pb-0 lg:pr-12 rounded-t">
        <h3 className="text-[28px] lg:text-[30px] text-white font-medium tracking-[0.02em]">
          Choose profile picture
        </h3>
        <AddressButton
          caption={miniPublicKey ? miniPublicKey : ""}
          icon={AddressImg}
          onClick={null}
        />
      </div>
      <div className="relative p-8 lg:p-10 flex-auto">
        <div className="mb-10">
          <Dropzone
            onDrop={(acceptedFiles) => {
              onImageLoad(acceptedFiles);
            }}
          >
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <label className="flex w-full h-24 px-4 transition bg-transparent border-2 border-white/20 border-dashed rounded-md appearance-none cursor-pointer hover:border-white/30 focus:outline-none">
                  <span className="flex items-center space-x-2 mr-3">
                    <Image src={GalleryImg} />
                  </span>
                  <span className="flex items-center space-x-2">
                    {files ? (
                      <span className="font-medium text-[#f3f3f3]">
                        <label className="text-primary">{files.length}</label>{" "}
                        file&#40;s&#41; selected
                        <br></br>
                        <label className="text-[14px] text-white/30">
                          Supports&#58; JPEG, JPEG2000, PNG
                        </label>
                      </span>
                    ) : (
                      <span className="font-medium text-[#f3f3f3]">
                        Drop image here or&nbsp;
                        <label className="text-primary">browse</label>
                        <br></br>
                        <label className="text-[14px] text-white/30">
                          Supports&#58; JPEG, JPEG2000, PNG
                        </label>
                      </span>
                    )}
                  </span>
                </label>
              </div>
            )}
          </Dropzone>
        </div>
        <div className="overflow-scroll">
          <div className="grid grid-cols-2 xl:grid-cols-3 mt-5 max-h-[35vh]">
            {loadedFiles.map((image, index) => (
              <div className="p-2" key={index}>
                <AvatarPanel
                  imageUrl={image.fileBlob}
                  title={image.fileName}
                  onClick={() => {
                    setIsNftSelected(false);
                    setAvatar(image.fileBlob);
                    setSelectedAvatar(image.fileBlob);
                  }}
                  selected={image.fileBlob == selectedAvatar}
                />
              </div>
            ))}
          </div>
          {nftLoading ? (
            <h3 className="text-center text-[24px] lg:text-[26px] text-white font-medium tracking-[0.02em]">
              Loading NFTs...
            </h3>
          ) : (
            <div className="grid grid-cols-2 xl:grid-cols-3 mt-5 max-h-[35vh]">
              {nfts.map(
                (
                  {
                    type,
                    mintAddress,
                    contractAddress,
                    tokenId,
                    name,
                    image,
                    collectionName,
                  },
                  index
                ) => (
                  <div className="p-2" key={index}>
                    <NftPanel
                      image={image}
                      name={name}
                      collectionName={collectionName}
                      type={type}
                      key={index}
                      selected={(() => {
                        if (!selectedNft || !selectedNft.imageNetwork)
                          return false;
                        if (selectedNft.imageNetwork === "Ethereum") {
                          return (
                            selectedNft.tokenId == tokenId &&
                            selectedNft.contractAddress == contractAddress
                          );
                        }
                        return selectedNft.mintAddress == mintAddress;
                      })()}
                      onClick={() => {
                        setIsNftSelected(true);
                        setAvatar(image);
                        setSelectedNft({
                          link: image,
                          network: type,
                          contractAddress,
                          tokenId,
                          mintAddress,
                        });
                      }}
                    />
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </div>
      <div className="w-full p-8 lg:p-10 flex-auto flex items-end px-8 py-8 lg:px-10 lg:py-8">
        <div className="inline-block w-[20%] pr-2">
          <BackButton onClick={() => goStep(2)} styles="rounded-[15px]" />
        </div>
        <div className="inline-block w-[80%] pl-2">
          <PrimaryButton
            caption="Mint"
            icon=""
            bordered={false}
            onClick={() => goStep(4)}
            disabled={nftLoading || avatar === null ? true : false}
            styles="rounded-[15px]"
          />
        </div>
      </div>
    </>
  );
};

export default UserPic;
