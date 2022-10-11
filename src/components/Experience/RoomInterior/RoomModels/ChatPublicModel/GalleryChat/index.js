import { checkBrowser } from "utils";

const GalleryChat = ({ modelURL, name }) => {
  return (
    <a-scene renderer="antialias: true;
      colorManagement: true;
      sortObjects: true;
      physicallyCorrectLights: true;
      maxCanvasWidth: 1920;
      maxCanvasHeight: 1920;"
      networked-scene="
      room: blocks;
      debug: true;">
            <a-assets timeout="100000">
            <a-asset-item id="gallery-gltf" src="/models/gallery/Gallery room.glb"></a-asset-item>
            <a-asset-item id="raccoon-obj" src={modelURL}></a-asset-item>
            <a-asset-item id="uv" src={"/models/helmet/helmet visor.gltf"}></a-asset-item>
            <a-asset-item id="navmesh-gltf" src="/models/gallery/navmesh.gltf"></a-asset-item>
            <img id="hub-img" src="/images/experience/hub.png" alt="hub"/>
            <img id="sky-img" src="/images/experience/hub/bluesky.jpg" alt="sky"/>
            <template 
                id="avatar-template"
                dangerouslySetInnerHTML={{
                    __html: '<a-entity>' +
                    '<a-entity class="nametag" text="value: ' + name + '; align:center;" position="0 0.5 0" rotation="0 180 0" scale="3 3 3"></a-entity>' +
                    '<a-entity class="nametag" text="value: ' + name + '; align:center;" position="0 0.5 0" rotation="0 0 0" scale="3 3 3"></a-entity>' +
                    '<a-gltf-model class = "character-model" rotation="0 180 0" position="0 -0.2 0" scale="1.5 1.5 1.5" src="#raccoon-obj"></a-gltf-model>' +
                    '<a-gltf-model class = "uv-model" rotation="0 180 0" position="0 -0.2 0" scale="1.5 1.5 1.5" src="#uv"></a-gltf-model>' +
                    '</a-entity>'
                }}
            />
        </a-assets>
        {checkBrowser() ? (
          <a-entity 
            id="rig"
            position="0 1.65 0" 
            look-controls="pointerLockEnabled: true; reverseMouseDrag: false"
            movement-controls="speed: 0.2"
            simple-navmesh-constraint="navmesh:#navmesh;fall: 5;height:1.65;" 
            networked="template:#avatar-template;attachTemplateToLocal:false;"
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
        ) : (
          <a-entity 
            id="rig"
            position="0 1.65 0" 
            look-controls="pointerLockEnabled: true; reverseMouseDrag: false"
            wasd-controls="acceleration: 20;"
            simple-navmesh-constraint="navmesh:#navmesh;fall: 5;height:1.65;" 
            networked="template:#avatar-template;attachTemplateToLocal:false;"
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
        <a-gltf-model shadow="cast: true; receive: true" model-info class="model" src="#gallery-gltf" position="0 0 0"
          scale="1 1 1"></a-gltf-model>
        <a-gltf-model id="navmesh" model-info class="model" src="#navmesh-gltf" visible="false">
        </a-gltf-model>

        <a-entity position="-2.425 5 24.32" rotation="-90 0 0"
          light="type: spot; angle: 70; intensity:  1; distance: 10; decay: 1; color:  #FFFFFF; shadowCameraVisible: false;">
        </a-entity>
        <a-entity position="2.377 5 24.32" rotation="-90 0 0"
          light="type: spot; angle: 70; intensity:  1; distance: 10; decay: 1; color:  #FFFFFF; shadowCameraVisible: false;">
        </a-entity>
        <a-entity position="-7.7 5 17.93" rotation="-90 0 0"
          light="type: spot; angle: 70; intensity:  1; distance: 10; decay: 1; color:  #FFFFFF; shadowCameraVisible: false;">
        </a-entity>
        <a-entity position="7.655 5 17.93" rotation="-90 0 0"
          light="type: spot; angle: 70; intensity:  1; distance: 10; decay: 1; color:  #FFFFFF; shadowCameraVisible: false;">
        </a-entity>

        <a-entity position="-2.425 5 -24.32" rotation="-90 0 0"
          light="type: spot; angle: 70; intensity:  1; distance: 10; decay: 1; color:  #FFFFFF; shadowCameraVisible: false;">
        </a-entity>
        <a-entity position="2.377 5 -24.32" rotation="-90 0 0"
          light="type: spot; angle: 70; intensity:  1; distance: 10; decay: 1; color:  #FFFFFF; shadowCameraVisible: false;">
        </a-entity>
        <a-entity position="-7.7 5 -17.93" rotation="-90 0 0"
          light="type: spot; angle: 70; intensity:  1; distance: 10; decay: 1; color:  #FFFFFF; shadowCameraVisible: false;">
        </a-entity>
        <a-entity position="7.655 5 -17.93" rotation="-90 0 0"
          light="type: spot; angle: 70; intensity:  1; distance: 10; decay: 1; color:  #FFFFFF; shadowCameraVisible: false;">
        </a-entity>

        <a-entity position="-8.3 5 9.6" rotation="-90 0 0"
          light="type: spot; angle: 70; intensity:  1; distance: 10; decay: 1; color:  #FFFFFF; shadowCameraVisible: false;">
        </a-entity>
        <a-entity position="8.325 5 9.6" rotation="-90 0 0"
          light="type: spot; angle: 70; intensity:  1; distance: 10; decay: 1; color:  #FFFFFF; shadowCameraVisible: false;">
        </a-entity>
        <a-entity position="-11.535 5 0" rotation="-90 0 0"
          light="type: spot; angle: 70; intensity:  1; distance: 10; decay: 1; color:  #FFFFFF; shadowCameraVisible: false;">
        </a-entity>
        <a-entity position="11.5 5 0" rotation="-90 0 0"
          light="type: spot; angle: 70; intensity:  1; distance: 10; decay: 1; color:  #FFFFFF; shadowCameraVisible: false;">
        </a-entity>
        <a-entity position="-8.3 5 -9.61" rotation="-90 0 0"
          light="type: spot; angle: 70; intensity:  1; distance: 10; decay: 1; color:  #FFFFFF; shadowCameraVisible: false;">
        </a-entity>
        <a-entity position="8.325 5 -9.61" rotation="-90 0 0"
          light="type: spot; angle: 70; intensity:  1; distance: 10; decay: 1; color:  #FFFFFF; shadowCameraVisible: false;">
        </a-entity>

        <a-entity light="type: ambient; intensity: 0.4; color:  #FFFFFF; shadowCameraVisible: false;"></a-entity>
        <a-entity position="0 4 0" rotation="-90 0 0"
          light="type: point; intensity:  0.5; distance: 50; decay: 0; color:  #FFFFFF; cast-shadow: false; shadowCameraVisible: false;">
        </a-entity>
        <a-entity position="0 4 -26.5" rotation="-90 0 0"
          light="type: point; intensity:  0.5; distance: 20; decay: 0; color:  #FFFFFF; shadowCameraVisible: false;">
        </a-entity>
        <a-entity position="0 4 26.5" rotation="-90 0 0"
          light="type: point; intensity:  0.5; distance: 20; decay: 0; color:  #FFFFFF; shadowCameraVisible: false;">
        </a-entity>
        <a-image width="2.3" height="2.9" class="clickable nocollision" 
          src="#hub-img" position="6.35 1.6 0" rotation="0 -90 0" material=" shader: liquid-portal">
          <a-box color="white" width="2.5" position="0 -1.5 0" height="0.1" depth="0.1"></a-box>
          <a-box color="white" width="2.5" position="0 1.5 0" height="0.1" depth="0.1"></a-box>
          <a-box color="white" width="0.1" position="1.2 0 0" height="2.9" depth="0.1"></a-box>
          <a-box color="white" width="0.1" position="-1.2 0 0" height="2.9" depth="0.1"></a-box>
        </a-image>
    <a-sky src="#sky-img"></a-sky>
  </a-scene>
  );
}

export default GalleryChat;