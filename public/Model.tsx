/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Plane014: THREE.Mesh
    Plane014_1: THREE.Mesh
    Plane014_2: THREE.Mesh
    badge001: THREE.Mesh
    badge002: THREE.Mesh
    badge003: THREE.Mesh
    badge004: THREE.Mesh
    badge005: THREE.Mesh
    discord_logo: THREE.Mesh
    github_log: THREE.Mesh
    group_A: THREE.Mesh
    group_B: THREE.Mesh
    group_C: THREE.Mesh
    nft: THREE.Mesh
    Plane001: THREE.Mesh
    QR: THREE.Mesh
    Text: THREE.Mesh
    Text001: THREE.Mesh
    Text002: THREE.Mesh
    Text003: THREE.Mesh
    Text004: THREE.Mesh
    Text005: THREE.Mesh
    Text007: THREE.Mesh
    Text008: THREE.Mesh
    Text009: THREE.Mesh
    Text010: THREE.Mesh
    Twitter_Logo: THREE.Mesh
  }
  materials: {
    charcoal: THREE.MeshStandardMaterial
    blue: THREE.MeshStandardMaterial
    ['emit blue']: THREE.MeshStandardMaterial
    ['badge.001']: THREE.MeshStandardMaterial
    ['badge.002']: THREE.MeshStandardMaterial
    ['badge.003']: THREE.MeshStandardMaterial
    ['badge.004']: THREE.MeshStandardMaterial
    ['badge.005']: THREE.MeshStandardMaterial
    discord: THREE.MeshStandardMaterial
    github: THREE.MeshStandardMaterial
    ['group A']: THREE.MeshStandardMaterial
    ['group B']: THREE.MeshStandardMaterial
    ['group C']: THREE.MeshStandardMaterial
    image: THREE.MeshStandardMaterial
    ['logo red yellow']: THREE.MeshStandardMaterial
    ['Material.003']: THREE.MeshStandardMaterial
    green: THREE.MeshStandardMaterial
    ['Material.001']: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/model.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Plane014.geometry} material={materials.charcoal} />
      <mesh geometry={nodes.Plane014_1.geometry} material={materials.blue} />
      <mesh geometry={nodes.Plane014_2.geometry} material={materials['emit blue']} />
      <mesh geometry={nodes.badge001.geometry} material={materials['badge.001']} position={[-2.08, -2.55, 0.12]} rotation={[Math.PI / 2, 0, 0]} scale={0.16} />
      <mesh geometry={nodes.badge002.geometry} material={materials['badge.002']} position={[-1.48, -2.55, 0.12]} rotation={[Math.PI / 2, 0, 0]} scale={0.16} />
      <mesh geometry={nodes.badge003.geometry} material={materials['badge.003']} position={[-0.88, -2.55, 0.12]} rotation={[Math.PI / 2, 0, 0]} scale={0.16} />
      <mesh geometry={nodes.badge004.geometry} material={materials['badge.004']} position={[-0.28, -2.55, 0.12]} rotation={[Math.PI / 2, 0, 0]} scale={0.16} />
      <mesh geometry={nodes.badge005.geometry} material={materials['badge.005']} position={[0.32, -2.55, 0.12]} rotation={[Math.PI / 2, 0, 0]} scale={0.16} />
      <mesh geometry={nodes.discord_logo.geometry} material={materials.discord} position={[-4.63, 1.65, 0.12]} />
      <mesh geometry={nodes.github_log.geometry} material={materials.github} position={[-4.63, 1.27, 0.12]} />
      <mesh geometry={nodes.group_A.geometry} material={materials['group A']} position={[-4.72, -1.3, 0.13]} rotation={[Math.PI / 2, 0, 0]} scale={[0.16, 0.09, 0.16]} />
      <mesh geometry={nodes.group_B.geometry} material={materials['group B']} position={[-4.72, -1.7, 0.13]} rotation={[Math.PI / 2, 0, 0]} scale={[0.16, 0.09, 0.16]} />
      <mesh geometry={nodes.group_C.geometry} material={materials['group C']} position={[-4.72, -2.1, 0.13]} rotation={[Math.PI / 2, 0, 0]} scale={[0.16, 0.09, 0.16]} />
      <mesh geometry={nodes.nft.geometry} material={materials.image} position={[3.2, 0.25, 0]} scale={[0.85, 0.85, 0.9]} />
      <mesh geometry={nodes.Plane001.geometry} material={materials['logo red yellow']} position={[-0.83, 1.77, 0.45]} rotation={[Math.PI / 2, 0, 0]} scale={0.68} />
      <mesh geometry={nodes.QR.geometry} material={materials['Material.003']} position={[-4.65, 0.03, 0.1]} />
      <mesh geometry={nodes.Text.geometry} material={materials.green} position={[-4.41, 2.09, 0.13]} rotation={[Math.PI / 2, 0, 0]} scale={0.23} />
      <mesh geometry={nodes.Text001.geometry} material={materials.green} position={[-4.41, 1.65, 0.13]} rotation={[Math.PI / 2, 0, 0]} scale={0.23} />
      <mesh geometry={nodes.Text002.geometry} material={materials.green} position={[-4.41, 1.27, 0.13]} rotation={[Math.PI / 2, 0, 0]} scale={0.23} />
      <mesh geometry={nodes.Text003.geometry} material={nodes.Text003.material} position={[-1.96, -1.65, 0.13]} rotation={[Math.PI / 2, 0, 0]} scale={0.2} />
      <mesh geometry={nodes.Text004.geometry} material={nodes.Text004.material} position={[-1.96, -1.45, 0.13]} rotation={[Math.PI / 2, 0, 0]} scale={0.2} />
      <mesh geometry={nodes.Text005.geometry} material={materials.green} position={[1.19, -0.25, 0.1]} rotation={[Math.PI / 2, 0, 0]} scale={0.65} />
      <mesh geometry={nodes.Text007.geometry} material={materials.green} position={[-4.42, -1.37, 0.13]} rotation={[Math.PI / 2, 0, 0]} scale={0.23} />
      <mesh geometry={nodes.Text008.geometry} material={materials.green} position={[-4.42, -1.77, 0.13]} rotation={[Math.PI / 2, 0, 0]} scale={0.23} />
      <mesh geometry={nodes.Text009.geometry} material={materials.green} position={[-4.42, -2.16, 0.13]} rotation={[Math.PI / 2, 0, 0]} scale={0.23} />
      <mesh geometry={nodes.Text010.geometry} material={nodes.Text010.material} position={[-1.96, -1.85, 0.13]} rotation={[Math.PI / 2, 0, 0]} scale={0.2} />
      <mesh geometry={nodes.Twitter_Logo.geometry} material={materials['Material.001']} position={[-4.63, 2.09, 0.12]} rotation={[Math.PI / 2, 0, 0]} scale={2.42} />
    </group>
  )
}

useGLTF.preload('/model.glb')
