'use client'
import * as THREE from 'three'
import { createRoot } from 'react-dom/client'
import React, {useState, useEffect } from 'react'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'
import { Mesh, MeshStandardMaterial } from 'three';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { useGLTF } from '@react-three/drei'
import { OrbitControls } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import cameraData from './cameraData.json'

const points = cameraData.map((data: any) => ({
    position: new THREE.Vector3(data.position.x, data.position.y, data.position.z),
    rotation: new THREE.Euler(data.rotation._x, data.rotation._y, data.rotation._z, data.rotation._order),
    lookAt: new THREE.Vector3(data.lookAt.x, data.lookAt.y, data.lookAt.z),
}))
let position = {
    x: 0,
    y: 0,
    z: 0
}
let lookAt = {
    x: 0,
    y: 0,
    z: 0
}
type GLTF = typeof GLTF
type GLTFResult = GLTF & {
    nodes: {
        [name: string]: Mesh;
    };
    materials: {
        [name: string]: MeshStandardMaterial;
    };
};
function createFrameRateLimiter(fps: number) {
    let then = performance.now()
    const interval = 1000 / fps
    return (callback: () => void) => {
        requestAnimationFrame((now) => {
            if (now - then >= interval) {
            then = now
            callback()
            }
        })
    }
}
type CameraData = {
    position: THREE.Vector3
    rotation: THREE.Euler
    lookAt: THREE.Vector3
}

function Model() {
    const { scene } = useGLTF('/3dworld/untitled.glb') as GLTFResult
    const [index, setIndex] = useState(0)
    
    const limitFrameRate = createFrameRateLimiter(60)
    useEffect(() => {
        const handleWheel = (event: WheelEvent) => {
            if (event.deltaY < 0) {
            setIndex((prevIndex) => Math.max(prevIndex - 1, 0))
            } else {
            setIndex((prevIndex) => Math.min(prevIndex + 1, points.length - 1))
            }
        }

        window.addEventListener('wheel', handleWheel)

        return () => {
            window.removeEventListener('wheel', handleWheel)
        }
    }, [])
    const { camera } = useThree()
    const [cameraData, setCameraData] = useState<CameraData[]>([])

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'q') {
            console.log(camera.position)
            setCameraData((prevData) => [
            ...prevData,
            {
                position: camera.position.clone(),
                rotation: camera.rotation.clone(),
                lookAt: camera.getWorldDirection(new THREE.Vector3()),
            },
            ])
        } else if (event.key === 'Enter') {
            const blob = new Blob([JSON.stringify(cameraData)], { type: 'application/json' })
            const url = URL.createObjectURL(blob)
            const link = document.createElement('a')
            link.href = url
            link.download = 'cameraData.json'
            link.click()
        }
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => {
        window.removeEventListener('keydown', handleKeyDown)
        }
    }, [camera, cameraData])
    

    useFrame(({ camera }) => {
        limitFrameRate(() => {
            const targetPosition = points[index].position
            const targetRotation = new THREE.Quaternion().setFromEuler(points[index].rotation)

            camera.position.lerp(targetPosition, 0.05)
            camera.quaternion.slerp(targetRotation, 0.05)
            camera.updateProjectionMatrix()
            /*console.log(camera.rotation)
            console.log(camera.position)*/
        })
    })

    //return <primitive object={scene} />
    return (
        <primitive object={scene} />
    )
}

export default function Splinev2() {
    return (
    <>
        <Canvas>
            <ambientLight intensity={Math.PI / 2} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
            <Model />
        </Canvas>
    </>
    )
}

/*
function Box(props: ThreeElements['mesh']) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  useFrame((state, delta) => (meshRef.current.rotation.x += delta))
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}*/