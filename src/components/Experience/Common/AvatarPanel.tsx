import { useEffect, useState, FC } from 'react'

const AvatarPanel: FC<any> = ({
  modelPath,
  position,
  rotation,
  scale,
}: {
  modelPath: string;
  position: string;
  rotation: string;
  scale: string;
}) => {

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    require('aframe/dist/aframe-master.js')
    setMounted(true)
  }, [])

  if (mounted) {
    return (
      <a-scene arjs='' embedded >
        <a-assets>
          <img id="UVTexture" src="/images/placeholder/avatars/blank.jpg" />
          <a-asset-item id="uv" src={"/resource/models/helmet/helmet visor.gltf"}></a-asset-item>
        </a-assets>
        <a-cursor></a-cursor>
        <a-entity camera look-controls wasd-controls />
        <a-entity rotation="0 0 0">
          <a-entity
            id="player"
            gltf-model={modelPath}
            scale={scale}
            rotation={rotation}
            position={position}
          ></a-entity>
          <a-gltf-model class="uv-model" rotation={rotation} position={position} scale={scale} src="#uv"></a-gltf-model>
          <a-entity geometry="primitive: plane" material="shader: flat; src: #UVTexture"></a-entity>
        </a-entity>
      </a-scene>
    )
  }
  return (
    <div>load...</div>
  )
};

export default AvatarPanel;