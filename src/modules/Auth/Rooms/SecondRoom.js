import React, { FC, useEffect, useState } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
// import { build_loading_screen } from "./Components/loading_screen";
import { build_loadingScreen } from "./Components/loadingScreen";
import { chooseControls, passControls } from './Components/utils';
import styles from './Components/chat.module.css';
import LockedRoom from "./LockedRoom";

export default function SecondEditRoom({
  picNo,
  setPicNo,
  chooseFlag,
  setChooseFlag,
  setRoom_id,
  imageUrl,
}) {
  const [mounted, setMounted] = useState(false);
  const [permition, setPermition] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [roomlist, setRooms] = useState([]);
  const assets = [
    {
      pos: "-5.97 1.876 1.82",
      rot: "0 90 0",
    },
    {
      pos: "-5.97 1.876 -0.1",
      rot: "0 90 0",
    },
    {
      pos: "-5.97 1.876 -2.087",
      rot: "0 90 0",
    },
    {
      pos: "5.2333 1.889 -2.060",
      rot: "0 -90 0",
    },
    {
      pos: "5.2333 1.889 -0.079",
      rot: "0 -90 0",
    },
    {
      pos: "5.2333 1.889 1.830",
      rot: "0 -90 0",
    },
  ];
  const { rooms, activeRoomId } = useSelector((state) => ({
    rooms: state.profile.data.rooms,
    activeRoomId: state.profile.activeRoomId,
  }));
  
  useEffect(() => {
    require("aframe/dist/aframe-master.js");
    require('aframe-liquid-portal-shader');
    require('./Components/components');
    if(!!AFRAME.components["cursor-listen"])
      delete AFRAME.components["cursor-listen"];
    AFRAME.registerComponent("cursor-listen", {
      schema: {
        picno: { default: 0 },
      },
      init: function () {
        this.el.addEventListener("click", (e) => {
          if(!!window.picState && !!window.picNo && window.picNo == this.attrValue.picno) {
            window.picState = false;
          } else {
            setPicNo(this.attrValue.picno);
            window.picNo = this.attrValue.picno;
            window.picState = true;
            document.exitPointerLock();
          }
        });
        this.el.addEventListener("mouseenter", (e) => {
          if (!!document.querySelector("#cursor"))
            document
              .querySelector("#cursor")
              .setAttribute("material", "color", "red");
        });
        this.el.addEventListener("mouseleave", (e) => {
          if (!!document.querySelector("#cursor"))
            document
              .querySelector("#cursor")
              .setAttribute("material", "color", "white");
        });
      },
    });
    if (!!rooms && rooms.length != 0) {
      var roomIndex = -1;
      if(activeRoomId != "") {
        roomIndex = rooms.findIndex(s => s._id == activeRoomId);
      } else {
        roomIndex = rooms.findIndex(s => s.active == true);
      }
      if(roomIndex != -1) {
        setRoom_id(rooms[roomIndex]._id)
        setRooms([rooms[roomIndex]]);
      }
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    var roomIndex = -1;
    if(activeRoomId != "") {
      roomIndex = rooms.findIndex(s => s._id == activeRoomId);
    }
    if(roomIndex != -1) {
      setRoom_id(rooms[roomIndex]._id)
      setRooms([rooms[roomIndex]]);
    }
  }, [activeRoomId]);

  useEffect(() => {
    if (roomlist.length == 0) {
      setPermition(false);
    } else {
      setPermition(true);
    }
  }, [roomlist])

  useEffect(() => {
    if (chooseFlag) {
      var frameEl = document.querySelector(`.picno${picNo}`);
      var frame_imageEL = document.createElement("a-image");
      frameEl.appendChild(frame_imageEL);
      frame_imageEL.setAttribute("src", imageUrl);
      frame_imageEL.setAttribute("width", 1.370);
      frame_imageEL.setAttribute("height", 1.370);
      frame_imageEL.setAttribute("position", { x: 0, y: 0, z: 0.01 });
      setChooseFlag(false);
      setPicNo("0");
    }
  }, [chooseFlag]);

  useEffect(() => {
    var clearHandle = setInterval(() => {
      var sceneEl = document.querySelector('a-scene');
      var loadingScreenEl = document.getElementById('loadingScreen');
      var loadingTextEl = document.getElementById('loadingText');
      var loadingBarEl = document.getElementById('loadingBar');
      if(sceneEl && loadingTextEl  && loadingBarEl  &&  loadingScreenEl) {
        build_loadingScreen();
        sceneEl.addEventListener('loaded', start_scene);
        clearInterval(clearHandle);
      }
    }, 300);
  }, [])

  const start_scene = () => {
    // setGifIntervalId(start_screens())
    chooseControls();
    passControls();
  }

  if (permition) {
    if (mounted) {
      return (
        <>
          <div id="loadingScreen" className={styles.loadingScreen_profile}>
              <div id="loadingText" className={styles.loadingText}>
              </div>
              <div id="loadingBar" className={styles.loadingBar_profile}>
              </div>
              <div id="loading_label" className={styles.loading_label}>
                  POWERED BY SOLARITY
                  <img id="loading_logo" className={styles.loading_logo} src="/assets/images/loading_logo.png" />
              </div>
          </div>
          <a-scene 
            embedded
            renderer="antialias: true;
            colorManagement: true;
            sortObjects: true;
            physicallyCorrectLights: true;
            maxCanvasWidth: 1920;
            maxCanvasHeight: 1920;" 
            id="sceneWrapper" 
            style={{opacity: 0, position: "absolute", top: "0px", zIndex: 0}}
          >
              <a-assets timeout="100000">
                <a-asset-item id="room2-gltf" src="/assets/models/own_second/SolGod ancient temple.glb"></a-asset-item>
                <a-asset-item id="navmesh-gltf" src="/assets/models/own_second/navmesh.gltf"></a-asset-item>

                <img id="hub-img" src="/assets/images/hub.png"/>
                <img id="sky-img" src="/assets/images/sky.jpg"/>

              </a-assets>

              <a-entity id="player">
                  <a-entity simple-navmesh-constraint="navmesh:#navmesh;fall:0.5;height:1.65;" id="head"
                            camera="fov: 70; active: true" position="0 1.65 0" wasd-controls="acceleration: 20;"
                            look-controls="pointerLockEnabled: true; reverseMouseDrag: false">
                      <a-entity id="cursor" class="mouseOnly" cursor="mousedown: true;" raycaster="far: 10; objects: .clickable"
                                material="color: white; shader: flat" position="0 0 -0.3"
                                geometry="primitive: ring; radiusInner: 0.005; radiusOuter: 0.007">
                      </a-entity>
                  </a-entity>
                  <a-entity id="leftHand" class="leftController controllerOnly"
                            hand-controls="hand: left; handModelStyle: lowPoly; color: #15ACCF"
                            laser-controls="hand: left" vive-controls="hand: left" oculus-touch-controls="hand: left"
                            windows-motion-controls="hand: left" daydream-controls="hand: left"
                            gearvr-controls="hand: left" magicleap-controls="hand: left" oculus-go-controls="hand: left"
                            valve-index-controls="hand: left" vive-focus-controls="hand: left"
                            generic-tracked-controller-controls="hand: left" raycaster="far: 0; objects: .leftclickable;"
                            blink-controls="cameraRig: #player; teleportOrigin: #camera; button: trigger; curveShootingSpeed: 10; collisionEntities: .collision; landingMaxAngle: 10"
                            visible="true"></a-entity>
                  <a-entity id="rightHand" class="rightController controllerOnly"
                            hand-controls="hand: right; handModelStyle: lowPoly; color: #15ACCF"
                            laser-controls="hand: right" vive-controls="hand: right" oculus-touch-controls="hand: right"
                            windows-motion-controls="hand: right" daydream-controls="hand: right"
                            gearvr-controls="hand: right" magicleap-controls="hand: right"
                            oculus-go-controls="hand: right" valve-index-controls="hand: right"
                            vive-focus-controls="hand: right" generic-tracked-controller-controls="hand: right"
                            raycaster="showLine: true; far: 10; interval: 0; objects: .clickable, a-link;"
                            line="color: lawngreen; opacity: 0.5" visible="true"></a-entity>
              </a-entity>

              {/* "ambient" lights */}
              <a-entity position="-15 40 40"
                        light="type: point; intensity:  5; distance: 100; decay: 0; color:  #FFFFFF; cast-shadow: false;">
              </a-entity>
              {/* ambient light */}
              <a-entity light="type: ambient; intensity: 0.5; color:  #FFFFFF;"></a-entity>
              {/* models */}
              <a-gltf-model shadow="cast: true; receive: true" model-info class="model" src="#room2-gltf" position="0 0 0" scale="1 1 1"></a-gltf-model>
              <a-gltf-model id="navmesh" model-info class="model" src="#navmesh-gltf" visible="false">
              </a-gltf-model>
              {/* frames */}
              {assets.map((asset, index) => (
                <a-plane
                  key={index}
                  class={`frame picno${index + 1} clickable`}
                  cursor-listen={`picno: ${index + 1}`}
                  position={asset.pos}
                  width="1.370"
                  height="1.370"
                  rotation={asset.rot}
                  material="shader:standard;"
                  color="#111122"
                >
                  {roomlist &&
                    !!roomlist[0] &&
                    !!roomlist[0].nftStates &&
                    roomlist[0].nftStates.map((nft, index1) => {
                      if (index + 1 == nft.no)
                        return (
                          <a-image
                            src={nft.link}
                            key={index1}
                            width="1.370"
                            height="1.370"
                          ></a-image>
                        );
                    })}
                </a-plane>
              ))}

              {/* {assets.map((asset, index) => (
                <a-plane
                  key={index}
                  class={`frame picno${index + 1}`}
                  position={asset.pos}
                  width="1.1"
                  height="1.1"
                  rotation={asset.rot}
                  material="shader:standard;"
                  color="#111122"
                >
                  {rooms && rooms != [] &&
                    !!rooms[0] &&
                    !!rooms[0].nftStates &&
                    rooms[0].nftStates.map((nft, index1) => {
                      if (index + 1 == nft.no)
                        return (
                          <a-image
                            src={nft.link}
                            key={index1}
                            width="1.1"
                            height="1.1"
                            position=""
                            material=""
                            geometry=""
                          ></a-image>
                        );
                    })}
                </a-plane>
              ))} */}
            <a-sky src="#sky-img"></a-sky>
          </a-scene>
        </>
      );
    }
    return <div>load...</div>;
  } else {
    return (
      <div className="w-full h-[400px] rounded-2xl relative" style={{background: "rgba(255, 255, 255, 0.2)"}}>
        <LockedRoom />
      </div>
    );
  }
}
