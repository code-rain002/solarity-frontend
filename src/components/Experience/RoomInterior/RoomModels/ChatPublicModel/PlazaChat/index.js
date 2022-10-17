import ACTIONS from "config/actions";
import { useEffect } from "react";
import { checkBrowser } from "utils";
import { getWidth } from "utils";

const PlazaChat = ({ modelURL, name, creator, slideUrls }) => {
  useEffect(() => {
    if(!window.socket || localStorage.getItem('name') == creator) {
      return;
    }
    if(!window.presentation) {
      window.socket.on(ACTIONS.CHANGE_SLIDE, ({action}) => {
        if(action == "forward") {
          document.querySelector('#next_image').click();
        } else {
          document.querySelector('#previous_image').click();
        }
      })
      window.presentation = true;
    }

  }, [])

  useEffect(() => {
    if(!!slideUrls) {
      var tmpSlideUrls = [...slideUrls];
      tmpSlideUrls.sort((a, b) => {
        return a.no - b.no;
      })
    }
  }, [slideUrls])

  return (
    <a-scene 
      renderer="antialias: true;
      colorManagement: true;
      sortObjects: true;
      physicallyCorrectLights: true;
      maxCanvasWidth: 1920;
      maxCanvasHeight: 1920;" 
      gltf-model="dracoDecoderPath: ./draco/ ;
      meshoptDecoderPath: ./meshopt/meshopt_decoder.js"
      networked-scene="
        room: blocks;
        debug: true;"
    >
      <a-assets timeout="100000">
        <a-asset-item id="structure" src="/models/plaza/solar punk mobile no collision.glb"></a-asset-item>
        <a-asset-item id="navmesh-gltf" src="/models/plaza/collision mobile.glb"></a-asset-item>

        <a-asset-item id="raccoon-obj" src={modelURL}></a-asset-item>
        <a-asset-item id="uv" src={"/models/helmet/helmet visor.gltf"}></a-asset-item>

        <img id="sky-img" src="/images/experience/hub/bluesky.jpg" />
        
        {!!slideUrls && slideUrls.map((slideUrl, index) => (
            <img key={index} id={"slide" + slideUrl.no} src={slideUrl.url} />
        ))}

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
          position="25 3.6 0" 
          look-controls="pointerLockEnabled: true; reverseMouseDrag: false"
          movement-controls="speed: 0.2"
          simple-navmesh-constraint="navmesh:#navmesh;fall: 5;height:1.65;" 
          networked="template:#avatar-template;attachTemplateToLocal:false;"
        >
          <a-entity 
            id="head" 
            class="mouseOnly" 
            raycaster="far: 10; objects: .clickable"
            material="color: white; shader: flat" 
            position="0 0 -0.3"
            rotation = "0 0 0"
            geometry="primitive: sphere; radius: 0.001"
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
          position="25 3.6 0"
          look-controls="pointerLockEnabled: true; reverseMouseDrag: false"
          wasd-controls="acceleration: 20;"
          simple-navmesh-constraint="navmesh:#navmesh;fall: 5;height:1.65;"
          networked="template:#avatar-template;attachTemplateToLocal:false;"
        >
          <a-entity 
            id="head" 
            class="mouseOnly" 
            raycaster="far: 10; objects: .clickable"
            material="color: white; shader: flat" 
            position="0 0 -0.3"
            rotation = "0 0 0"
            geometry="primitive: sphere; radius: 0.001"
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
      {/* lights */}
      {/* ambient light */}
      <a-entity light="type: ambient; intensity: 0.5; color:  #FFFFFF; shadowCameraVisible: false;"></a-entity>
      {/* slider */}
      <a-entity rotation="0 -90 0" id="slider" position="40.215 3.83 0.94"
        slideshow="forwardTrigger: #next_image; backwardTrigger: #previous_image; offset: 4.4 0 0; duration: 0.1"
      >
        {!!slideUrls && slideUrls.map((slideUrl, index) => (
          <a-image src={"#slide" + slideUrl.no} key={index} rotation="0 -180 0" width="4.41" height="2.5" position="0 0 0.01"></a-image>
        ))}
      </a-entity>
      {/* arrows */}
      <a-entity rotation="0 -90 0" position={localStorage.getItem('name') == creator ? "40.2 3.8 1": "40.2 3 1"} id="slider_commands" width="4" height="3">
        <a-plane text="value: >>; wrap-count: 6; align: center" width=".2" height=".2" id="next_image"
                  class="clickable nocollision" material="shader: flat;" color="#44AABB" position="2 -1.2 0">
        </a-plane>
        <a-plane text="value: <<; wrap-count: 6; align: center" width=".2" height=".2" id="previous_image"
                  class="clickable nocollision" material="shader: flat;" color="#44AABB" position="1.8 -1.2 0">
        </a-plane>
      </a-entity>
      {/* models */}
      <a-gltf-model model-info class="model" src="#structure" position="0 0 0" scale="1 1 1"> </a-gltf-model>
      {/* nav-mesh: protecting us from running thru walls */}
      <a-gltf-model id="navmesh" model-info class="model" src="#navmesh-gltf" visible="false">
      </a-gltf-model>

      <a-sky animation="property: rotation;
      to: -360 360 -360;
      dur: 5000000;
      easing: linear;
      loop:true" src="#sky-img"></a-sky>
    </a-scene>
  );
}

export default PlazaChat;