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
    setMounted(true);
  }, [])

  return (
    <div className='w-full h-full'>
      {
        mounted ? (
          <a-scene embedded>
            <a-assets>
              <a-asset-item id="uv" src={"/models/helmet/helmet visor.gltf"}></a-asset-item>
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
            </a-entity>
          </a-scene>
        ) : (
          <div>load...</div>
        )
      }
    </div>
  )
};

export default AvatarPanel;