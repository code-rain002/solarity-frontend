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
// import { GLTFExporter, OrbitControls } from "three-stdlib";
import * as THREE from 'three'
import { toMetaplexFile, toMetaplexFileFromBrowser, toMetaplexFileFromJson } from '@metaplex-foundation/js'
import axios from "axios";
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter';

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
  const canvasRef = useRef();
  const [modelFile, setModelFile] = useState<File>();
  const [ipfsUrl, setIpfsUrl] = useState<string>();

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

  const mintModel = async (url) => {
    try {
      const metadataJson = {
        name: userInfo.domain,
        description: userInfo.title,
        symbol: 'Passport',
        seller_fee_basis_points: 0,
        image: url,
        animation_url: url,
        external_url: `https://solarity-new-frontend.vercel.com/${userInfo.domain}/profile`,
        properties: {
          files: [
            {
              uri: url,
              type: "vr/glb"
            }
          ],
          category: 'vr',
          creators: [
            {
              address: userInfo.solanaAddress,
              share: 100
            }
          ]
        },
        collection: {
          name: "Passport 3D NFT",
          family: "3D NFT"
        },
        attributes: []
      };

      if (userInfo.solanaAddress) {
        metadataJson.attributes.push({
          trait_type: 'SolanaAddress',
          value: userInfo.solanaAddress
        });
      }

      for (let key in userInfo.links) {
        if (userInfo.links[key].connected) {
          metadataJson.attributes.push({
            trait_type: key,
            value: userInfo.links[key].usename
          });
        }
      }

      userInfo.daos.map((dao, index) => {
        metadataJson.attributes.push({
          trait_type: `Dao${index + 1}`,
          value: dao.name
        });
      });

      userInfo.badges.map((badge, index) => {
        metadataJson.attributes.push({
          trait_type: `Badge${index + 1}`,
          value: badge.name
        });
      });

      console.log(metadataJson)

      const { uri, metadata } = await metaplex
        .nfts()
        .uploadMetadata(metadataJson)
        .run();

      console.log(uri)

      let { nft } = await metaplex.nfts().create({
        uri: uri,
        name: userInfo.domain,
        symbol: "Passport",
        sellerFeeBasisPoints: 0,
        isCollection: false,
        maxSupply: 0,
      })
      .run();
      console.log(nft);

    } catch (err) {
      console.log('err: ', err)
    }
  };

  const saveArrayBuffer = (buffer, filename) => {
    save(new Blob([buffer], { type: 'application/octet-stream' }), filename)
  }

  const saveString = (text, filename) => {
    save(new Blob([text], { type: 'text/plain' }), filename);
  }

  const save = (blob, filename) => {
    const link = document.createElement('a');
    link.style.display = 'none';
    document.body.appendChild(link);

    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  }

  const blobToFile = (theBlob, fileName) => {
    const newFile = new File([theBlob], fileName, {
      type: theBlob.type
    })
    return newFile;
  }

  const uploadModel = async (buffer) => {
    const blob = new Blob([buffer], { type: 'application/octet-stream' })
    const file = blobToFile(blob, 'Model.glb')
    const data = new FormData();
    data.append('file', file);
    const res = await fetch(`https://api.pinata.cloud/pinning/pinFileToIPFS`, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_PINATA_JWT}`,
      },
      method: 'POST',
      body: data,
    });

    const json = await res.json();
    const ipfsUrl = `https://solarity.mypinata.cloud/ipfs/${json.IpfsHash}?filename=Model.glb`;
    console.log(ipfsUrl)
    setIpfsUrl(ipfsUrl);

    mintModel(ipfsUrl)
  }

  const exportModel = (e) => {
    console.log(modelRef.current)
    const options = {
      binary: true,
    }
    const exporter = new GLTFExporter();
    exporter.parse(modelRef.current, 
      (result: ArrayBuffer) => {
        console.log(result)
        // saveArrayBuffer(result, 'model.glb')
        uploadModel(result)
      },
      (error) => {
        console.log(error)
      }, options);
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
              {step === 5 && <EditStyle onMint={exportModel} />}
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] md:w-[85%] lg:w-[50%] xl:w-[45%] custom-2xl:w-[45%] lg:block m-auto">
        <NftDemo modelRef={modelRef} />
      </div>
    </div>
  );
};

export default RegisterPage;
