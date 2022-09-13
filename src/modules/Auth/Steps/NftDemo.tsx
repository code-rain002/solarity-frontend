import { AddressButton, BackButton, PrimaryButton } from "components/Common/Buttons";
import { AddressImg, AvatarImg, MetamaskImg, PhantomImg } from "components/Common/Images";
import Logo from "components/Common/Logo";
import { UserAvatar } from "components/Common/Panels";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useRef, Suspense } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { minifyAddress } from "utils";
import { Model } from "./Model";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from 'three'

const NftDemo = (props) => {
  const { setAvatar, avatar, goStep } = props;
  const dispatch = useDispatch();
  const router = useRouter();
  const { userInfo, step } = useSelector((state: RootStateOrAny) => ({
    userInfo: state.auth.userInfo,
    step: state.auth.step,
  }));

  // bug code
  const publicKey = localStorage.getItem("publickey");
  const walletType = localStorage.getItem("type");

  const miniPublicKey = minifyAddress(publicKey, 3);
  const provider = (window as any).phantom.solana;

  // const initBox = () => {
  //   const scene = new THREE.Scene()
  //   const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  //   const renderer = new THREE.WebGLRenderer();
  //   renderer.setSize( 200, 200 );
  //   document.getElementById("box").innerHTML = ""
  //   document.getElementById("box").appendChild( renderer.domElement );

  //   const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  //   const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
  //   const cube = new THREE.Mesh( geometry, material );
  //   scene.add( cube );
  //   camera.position.z = 5;
  //   renderer.render( scene, camera );
  // }

  // useEffect(() => {
  //   initBox()
  // }, [])

  return (
    <>
      <Canvas style={{width: '650px', height: '650px'}} camera={{ fov: 35, position: [0, 0, 20]}}>
        <pointLight position={[0, 30, 100]} />
        <pointLight position={[0, 30, -100]} />
        <ambientLight intensity={0.1} />
        <Suspense fallback={null}>
          <Model 
            domain={userInfo.domain}
            title={userInfo.title}
          />
          <OrbitControls />
        </Suspense>
      </Canvas>
      {/* <div id="box"></div> */}
    </>
  );
};

export default NftDemo;
