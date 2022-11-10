import React, { useEffect, useState } from 'react';
import { ROOMS_ASSET } from 'data/Room';
import { checkBrowser } from 'utils';

const FirstEditRoom = (props) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(checkBrowser());
  }, [])
  return (
    <a-scene 
      renderer="
        antialias: true;
        colorManagement: true;
        sortObjects: true;
        physicallyCorrectLights: true;
        maxCanvasWidth: 1920;
        maxCanvasHeight: 1920;
      "
      id="sceneWrapper" 
      style={{opacity: 0}}
    >
        <a-assets timeout="100000">
          <a-asset-item id="room-gltf" src="/models/own/Normal room optimized.glb"></a-asset-item>
          <a-asset-item id="arcade-gltf" src="/models/own/Arcade console.glb"></a-asset-item>
          <a-asset-item id="atm-gltf" src="/models/own/ATM.glb"></a-asset-item>
          <a-asset-item id="chair-gltf" src="/models/own/Chair.glb"></a-asset-item>

          <a-asset-item id="vr-gltf" src="/models/own/VR.glb"></a-asset-item>
          <a-asset-item id="navmesh-gltf" src="/models/own/navmesh.gltf"></a-asset-item>

          <img id="hub-img" src="/images/experience/hub.png" />
          <img id="sky-img" src="/images/experience/sky.jpg"/>

          <img id="gif-img1" src="/images/experience/hub/gif_img1.jpeg"/>
          <img id="gif-img2" src="/images/experience/hub/gif_img2.jpeg"/>
          <img id="gif-img3" src="/images/experience/hub/gif_img3.jpeg"/>
          <img id="gif-img4" src="/images/experience/hub/gif_img4.jpeg"/>

        </a-assets>

        {isMobile ? (
          <a-entity 
            id="rig"
            position="0 1.65 0" 
            look-controls="pointerLockEnabled: true; reverseMouseDrag: false"
            movement-controls="speed: 0.2"
            simple-navmesh-constraint="navmesh:#navmesh;fall: 5;height:1.65;" 
          >
            <a-entity 
              id="head" 
              rotation = "0 0 0"
              camera="fov: 70; active: true"
            >
              <a-entity 
                id="cursor" 
                class="mouseOnly" 
                cursor="" 
                raycaster="far: 10; objects: .clickable"
                material="color: white; shader: flat" 
                position="0 0 -0.3"
                geometry="primitive: sphere; radius: 0.001"
              >
              </a-entity>
            </a-entity>
            <a-entity id="leftHand" class="leftController controllerOnly"
              hand-controls="hand: left; handModelStyle: lowPoly; color: #15ACCF"
              laser-controls="hand: left" vive-controls="hand: left" oculus-touch-controls="hand: left"
              windows-motion-controls="hand: left" daydream-controls="hand: left"
              gearvr-controls="hand: left" magicleap-controls="hand: left" oculus-go-controls="hand: left"
              valve-index-controls="hand: left" vive-focus-controls="hand: left"
              generic-tracked-controller-controls="hand: left" raycaster="far: 0; objects: .leftclickable;"
              blink-controls="cameraRig: #rig; teleportOrigin: #camera; button: trigger; curveShootingSpeed: 10; collisionEntities: .collision; landingMaxAngle: 10"
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
        ): (
          <a-entity 
            id="rig"
            position="0 1.65 0" 
            look-controls="pointerLockEnabled: true; reverseMouseDrag: false"
            wasd-controls="acceleration: 20;"
            simple-navmesh-constraint="navmesh:#navmesh;fall: 5;height:1.65;" 
          >
            <a-entity 
              id="head" 
              rotation = "0 0 0"
              camera="fov: 70; active: true"
            >
              <a-entity 
                id="cursor" 
                class="mouseOnly" 
                cursor="" 
                raycaster="far: 10; objects: .clickable"
                material="color: white; shader: flat" 
                position="0 0 -0.3"
                geometry="primitive: sphere; radius: 0.001"
              >
              </a-entity>
            </a-entity>
            <a-entity id="leftHand" class="leftController controllerOnly"
              hand-controls="hand: left; handModelStyle: lowPoly; color: #15ACCF"
              laser-controls="hand: left" vive-controls="hand: left" oculus-touch-controls="hand: left"
              windows-motion-controls="hand: left" daydream-controls="hand: left"
              gearvr-controls="hand: left" magicleap-controls="hand: left" oculus-go-controls="hand: left"
              valve-index-controls="hand: left" vive-focus-controls="hand: left"
              generic-tracked-controller-controls="hand: left" raycaster="far: 0; objects: .leftclickable;"
              blink-controls="cameraRig: #rig; teleportOrigin: #camera; button: trigger; curveShootingSpeed: 10; collisionEntities: .collision; landingMaxAngle: 10"
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
        )}
        <a-gltf-model shadow="cast: true; receive: true" model-info class="model-loaded" src="#room-gltf" position="0 0 0"
                      scale="1 1 1"></a-gltf-model>
        <a-gltf-model shadow="cast: true; receive: true" model-info class="model-loaded" src="#arcade-gltf" position="0 0 0"
                      scale="1 1 1"></a-gltf-model>
        <a-gltf-model shadow="cast: true; receive: true" model-info class="model-loaded" src="#atm-gltf" position="0 0 0"
                      scale="1 1 1"></a-gltf-model>
        <a-gltf-model shadow="cast: true; receive: true" model-info class="model-loaded" src="#chair-gltf" position="0 0 0"
                      scale="1 1 1"></a-gltf-model>
        <a-gltf-model shadow="cast: true; receive: true" model-info class="model-loaded clickable nocollision" src="#vr-gltf"
                      simple-link="href: ../solarity-build-v-3/dist/index.html" position="0.4 1 -2.6" scale="1 1 1">
        </a-gltf-model>
        <a-gltf-model id="navmesh" model-info class="model-loaded" src="#navmesh-gltf" visible="false">
        </a-gltf-model>

        <a-entity position="0 2 0" rotation="0 0 0"
                  light="type: point; intensity:  5; distance: 10; decay: 1; color:  #FFFFFF; cast-shadow: false; shadowCameraVisible: false;">
        </a-entity>
        <a-entity position="2.7 1 -0.35" rotation="-30 110 0"
                  light="type: spot; intensity:  0.2; distance:0.6; penumbra: 0.5; decay: 1; color:  #FFFFFF; cast-shadow: true; shadow-map-height: 1024; shadow-map-width: 1024; shadowCameraVisible: false;">
        </a-entity>
        <a-entity light="type: ambient; intensity: 0.2; color:  #FFFFFF; shadowCameraVisible: false;"></a-entity>
        {ROOMS_ASSET[parseInt(props.no)].assets.map((asset, index) => (
          <a-plane
            key={index}
            class={`frame picno${index + 1} clickable`}
            cursor-listen={`picno: ${index + 1}`}
            position={asset.pos}
            width="1.1"
            height="1.1"
            rotation={asset.rot}
            material="shader:standard;"
            color="#111122"
          >
            { props.visitFlag != 1 && !!props.roomInfo.nftStates &&
              props.roomInfo.nftStates.map((nft, index1) => {
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
        ))}
        <a-plane id="screen" width="2" height="1.2" rotation="0 180 0" material="shader: standard;"
                position="0.4065 1.16 2.63" color="#CC22FF">
            <a-text align="center" rotation="0 0 0" width="0.9" value="FLOOR PRICE" position="0.5 0.3 0.01"
                    x-offset="0.05" wrap-count="20" color="#FFFFFF"></a-text>
        </a-plane>
        <a-image width="1.5" height="2" class="clickable nocollision"
                src="#hub-img" position="-1.9 1.1 2.9" rotation="0 0 0" material=" shader: liquid-portal">
            <a-box color="black" width="1.5" position="0 -1 0" height="0.1" depth="0.1"></a-box>
            <a-box color="black" width="1.5" position="0 1 0" height="0.1" depth="0.1"></a-box>
            <a-box color="black" width="0.1" position="0.7 0 0" height="1.9" depth="0.1"></a-box>
            <a-box color="black" width="0.1" position="-0.7 0 0" height="1.9" depth="0.1"></a-box>
        </a-image>
        <a-sky src="#sky-img"></a-sky>
    </a-scene>
  );
}

export default FirstEditRoom;