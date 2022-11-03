import { checkBrowser } from "utils";
const HubChat = ({ modelURL, name }) => {
  return (
    <a-scene
      renderer="antialias: true;
        colorManagement: true;
        sortObjects: true;
        physicallyCorrectLights: true;
        maxCanvasWidth: 1920;
        maxCanvasHeight: 1920;"
      networked-scene="
        room: blocks;
        debug: true;"
    >
      <a-assets timeout="100000">
        <a-asset-item id="holo" src="/models/hub/Hologram_sphere.glb"></a-asset-item>
        <a-asset-item id="chair1" src="/models/hub/chair.glb"></a-asset-item>
        <a-asset-item id="table1" src="/models/hub/table.glb"></a-asset-item>
        <a-asset-item id="structure" src="/models/hub/The hub optimized no chairs.glb"></a-asset-item>

        <a-asset-item id="navmesh-gltf" src="/models/hub/navmesh4.gltf"></a-asset-item>

        <a-asset-item id="raccoon-obj" src={modelURL}></a-asset-item>
        <a-asset-item id="uv" src={"/models/helmet/helmet visor.gltf"}></a-asset-item>

        <img id="try-img" src="/images/experience/hub/japan.png" />
        <img id="tweet-img" src="/images/experience/hub/tweet.jpg" />
        <img id="sky-img" src="/images/experience/sky.jpg" />

        <img id="gallery-img" src="/images/experience/hub/gallery.png" />
        <img id="room-img" src="/images/experience/hub/room.png" />

        <img id="gif-img1" src="/images/experience/hub/gif_img1.jpeg" />
        <img id="gif-img2" src="/images/experience/hub/gif_img2.jpeg" />
        <img id="gif-img3" src="/images/experience/hub/gif_img3.jpeg" />
        <img id="gif-img4" src="/images/experience/hub/gif_img4.jpeg" />

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
      ): (
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
      
      {/* lights  */}
      {/* ambient light  */}
      <a-entity light="type: ambient; intensity: 0; color:  #FFFFFF; shadowCameraVisible: false;"></a-entity>
      {/* table lights  */}
      <a-entity light="type:point; color:  #FFFFFF; intensity: 3; distance: 10; decay: 1;" position="3 3 0">
      </a-entity>
      <a-entity light="type:point; color:  #FFFFFF; intensity: 3; distance: 10; castShadow: false; decay: 1"
        position="-2.5 3 4.6">
      </a-entity>
      <a-entity light="type:point; color:  #FFFFFF; intensity: 3; distance: 10; castShadow: false; decay: 1"
        position="-2.5 3 -4.6">
      </a-entity>
      <a-entity light="type:point; color:  #FFFFFF; intensity: 3; distance: 10; castShadow: false; decay: 1"
        position="8.7 3 4.6">
      </a-entity>
      <a-entity light="type:point; color:  #FFFFFF; intensity: 3; distance: 10; castShadow: false; decay: 1"
        position="8.7 3 -4.6">
      </a-entity>
      {/* statue lights */}
      <a-entity light="type:spot; angle: 60; color:  #DDAAFF; intensity: 10; distance: 6; decay: 1;"
        rotation="-45 90 0" position="-5 5.5 0">
      </a-entity>
      {/* "ambient" lights */}
      <a-entity light="type:spot; angle: 90; color:  #DDAAFF; intensity: 10; distance: 50; decay: 1; "
        rotation="-90 0 0" position="14 5.5 0">
      </a-entity>
      <a-entity light="type:spot; angle: 90; color:  #DDAAFF; intensity: 10; distance: 50; decay: 1; "
        rotation="-90 0 0" position="-13 5.5 0">
      </a-entity>

      {/* big screen  */}
      <a-plane width="6.4" height="3.5" rotation="0 180 0" material="shader: standard;" position="3 2.4 7.4"
        color="#111122">
        <a-image id="bigScreenImg" src="#try-img" rotation="0 -180 0" width="6.4" height="3.5"
          position="0 0 0.01"></a-image>
      </a-plane>

      {/* average screen left  */}
      <a-plane class="clickable" id="nft" width="3" height="3.5" rotation="0 0 0" material="shader: flat;"
        position="1.3 2.4 -7.4" color="#298e7a">
        {/* title  */}
        <a-text align="center" rotation="0 0 0" width="2.9" value="SOL PRICE" position="0 -1.35 0.01"
          x-offset="0.05" wrap-count="40" color="#FFFFFF"></a-text>
      </a-plane>

      {/* average screen right */}
      <a-plane id="twitter" width="3" height="3.5" rotation="0 0 0" material="shader: flat;"
        position="4.7 2.4 -7.4" color="#EECCFF">
        {/* title  */}
        <a-text align="center" rotation="0 0 0" width="2.9" value="LATEST TWEETS" position="0 1.6 0.01"
          x-offset="0.05" wrap-count="30" color="#298e7a"></a-text>
        {/* arrows  */}
        <a-plane text="value: up; wrap-count: 6; align: center" width=".15" height=".15" id="scrollTwitterUp"
          class="clickable nocollision" material="shader: flat;" color="#44AABB"
          position="1.35 -1.35 0.02">
        </a-plane>
        <a-plane text="value: down; wrap-count: 6; align: center" width=".15" height=".15"
          id="scrollTwitterDown" class="clickable nocollision" material="shader: flat;" color="#44AABB"
          position="1.35 -1.55 0.02">
        </a-plane>
      </a-plane>

      {/* tiny screen right */}
      <a-plane position="-13.21 2.75 4.33" width="1.5" height="1.75" rotation="0 133.25 0"
        material="shader: standard;" color="#111122">
        <a-image width="1.5" height="1.75" position="0 0 0.01"
          src="/images/experience/hub/ffc2b2a0-614a-4359-b164-68c5b9f4396d.jpg"></a-image>
      </a-plane>
      {/* tiny screen left */}
      <a-plane position="-13.22 2.75 -4.3" width="1.5" height="1.75" rotation="0 46.75 0"
        material="shader: standard;" color="#111122">
        <a-image width="1.5" height="1.75" position="0 0 0.01" src="/images/experience/hub/media_FKNOb38VgAkOruy.jpg">
        </a-image>
      </a-plane>
      {/* tiny screen center */}
      <a-plane position="-14.445 2.75 0" width="1.5" height="1.75" rotation="0 90 0" material="shader: standard;"
        color="#111122">
        <a-image width="1.5" height="1.75" position="0 0 0.01" src="/images/experience/hub/download.png"></a-image>
      </a-plane>
      {/* portals */}
      <a-image width="1.3" height="1.9" class="clickable nocollision"
        src="#gallery-img" position="14.2 1.1 2.2" rotation="0 -90 0" material=" shader: liquid-portal">
        <a-box color="black" width="1.5" position="0 -1 0" height="0.1" depth="0.1"></a-box>
        <a-box color="black" width="1.5" position="0 1 0" height="0.1" depth="0.1"></a-box>
        <a-box color="black" width="0.1" position="0.7 0 0" height="1.9" depth="0.1"></a-box>
        <a-box color="black" width="0.1" position="-0.7 0 0" height="1.9" depth="0.1"></a-box>
      </a-image>
      <a-image width="2.3" height="2.9" class="clickable nocollision" src="#try-img"
        position="14.2 1.6 0" rotation="0 -90 0" material=" shader: liquid-portal">
        <a-box color="black" width="2.5" position="0 -1.5 0" height="0.1" depth="0.1"></a-box>
        <a-box color="black" width="2.5" position="0 1.5 0" height="0.1" depth="0.1"></a-box>
        <a-box color="black" width="0.1" position="1.2 0 0" height="2.9" depth="0.1"></a-box>
        <a-box color="black" width="0.1" position="-1.2 0 0" height="2.9" depth="0.1"></a-box>
      </a-image>
      <a-image width="1.5" height="2" class="clickable nocollision"
        src="#room-img" position="14.2 1.1 -2.2" rotation="0 -90 0" material=" shader: liquid-portal">
        <a-box color="black" width="1.5" position="0 -1 0" height="0.1" depth="0.1"></a-box>
        <a-box color="black" width="1.5" position="0 1 0" height="0.1" depth="0.1"></a-box>
        <a-box color="black" width="0.1" position="0.7 0 0" height="1.9" depth="0.1"></a-box>
        <a-box color="black" width="0.1" position="-0.7 0 0" height="1.9" depth="0.1"></a-box>
      </a-image>

      {/* models  */}
      <a-gltf-model model-info class="model" src="#structure" position="0 0 0" scale="1 1 1"> </a-gltf-model>

      {/* globe  */}
      <a-gltf-model id="globe" model-info class="model" src="#holo"
        material="roughness: 70; metalness: 0; shader: standard"
        animation__spin="property: rotation; dur: 12000; loop: true; to: 0 360 0;" scale="2 2 2" position="-10.4 3.65 0">
      </a-gltf-model>

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

export default HubChat;