import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Logo from "components/Common/Logo";
import { useDispatch, RootStateOrAny, useSelector } from "react-redux";
import {
  EditStyle,
  UserBadges,
  UserDaos,
  UserInfo,
  UserPic,
  NftDemo,
} from "./Steps";
import { jumpStep, setStep, updateUserInfo } from "redux/slices/authSlice";
import ProgressBar from "./ProgressBar";
import Circle from "./Circle";
import { apiCaller } from "utils/fetcher";
import { useWallet } from "@solana/wallet-adapter-react";
import { useMetaplex } from "utils/contexts/useMetaplex";
import { GLTFExporter } from "three-stdlib";

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const wallet = useWallet();
  const { metaplex } = useMetaplex();
  const { userInfo, step } = useSelector((state: RootStateOrAny) => ({
    userInfo: state.auth.userInfo,
    step: state.auth.step,
  }));
  const modelRef = useRef();
  const canvasRef = useRef()

  useEffect(() => {
    apiCaller
      .post("/auth/checkStep")
      .then((response) => {
        if (response.data.user) {
          const user = response.data.user;
          // console.log(user)
          let tempUserInfo = userInfo;
          switch (user.registerStep) {
            case 6:
              tempUserInfo = {
                ...tempUserInfo,
                passportStyle: user.passportStyle
              }
            case 5:
              tempUserInfo = {
                ...tempUserInfo,
                badges: user.badges
              }
            case 4:
              tempUserInfo = {
                ...tempUserInfo,
                profileImage: user.profileImage
              }
            case 3:
              tempUserInfo = {
                ...tempUserInfo,
                daos: user.daos
              }
            case 2:
              tempUserInfo = {
                ...tempUserInfo,
                domain: user.username,
                title: user.bio
              }
            case 1:
              tempUserInfo = {
                ...tempUserInfo,
                solanaAddress: user.solanaAddress,
                links: user.externalLinks
              }
              break;
          }
          dispatch(updateUserInfo({
            payload: tempUserInfo,
            callback: () => dispatch(jumpStep({ stepNum: user.registerStep }))
          }))
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onMint = async () => {
    try {
      console.log(modelRef.current);
      console.log(canvasRef.current);
      // const options = { 
      //   binary: true,
      //   embedImages: true
      // }
      // const exporter = new GLTFExporter();
      // exporter.parse(modelRef.current, (result) => {
      //   console.log(result)
      //   saveArrayBuffer(result, 'model.glb')
      // }, options);
      // const { uri, metadata } = await metaplex
      // .nfts()
      // .uploadMetadata({
      //     name: "My NFT",
      //     description: "My description",
      //     image: "http://res.cloudinary.com/dmzpebj2g/image/upload/v1664109071/assets/avatars/l43lcylxscgxuux3cbbz.jpg",
      // })
      // .run();
      // console.log(uri) // https://arweave.net/789
      // console.log('hi', metaplex)
      // let { nft } = await metaplex.nfts().create({
      //   uri: uri,
      //   name: "New NFT",
      //   sellerFeeBasisPoints: 500,
      // })
      // .run();
      // console.log(nft);
      

      // let myNfts = await metaplex
      //   .nfts()
      //   .findAllByOwner({ owner: metaplex.identity().publicKey })
      // .run();
      // console.log("myNfts", myNfts);
    } catch (err) {
      console.log('err: ', err)
    }
  };

  const saveArrayBuffer = (buffer, filename) => {
    save(new Blob([buffer], { type: 'application/octet-stream' }), filename)
  }

  const save = (blob, filename) => {
    console.log(blob, filename)
    const link = document.createElement('a');
    link.style.display = 'none';
    document.body.appendChild(link);

    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  }

  return (
    <div className="lg:flex lg:flex-row justify-center md:flex-col gap-[25px] mt-[50px] items-center">
      <div className="w-[90%] md:w-[65%] lg:w-[50%] xl:w-[55%] custom-2xl:w-[55%] m-auto z-10">
        <div className="relative w-auto mx-auto">
          <div className="rounded-[30px] min-h-[800px] lg:min-h-[calc(100vh-100px)] shadow-lg relative w-full bg-[#141416] outline-none focus:outline-none flex flex-row">
            <div className="hidden xl:w-[40%] xl:block h-full">
              <div className="py-6">
                <Logo />
              </div>
              <Circle />
              <ProgressBar />
            </div>
            <div className="w-[100%] xl:w-[60%] flex flex-col relative">
              {step === 1 && <UserInfo />}
              {step === 2 && <UserDaos />}
              {step === 3 && <UserPic />}
              {step === 4 && <UserBadges />}
              {step === 5 && <EditStyle onMint={onMint} />}
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] md:w-[85%] lg:w-[50%] xl:w-[45%] custom-2xl:w-[45%] lg:block m-auto">
        <NftDemo modelRef={modelRef} canvasRef={canvasRef} />
      </div>
    </div>
  );
};

export default RegisterPage;
