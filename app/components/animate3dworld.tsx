'use client'
import { useEffect, useRef } from 'react';
import '../ui/styles/3dworld.css';
import * as THREE from 'three';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls';

export default function P3dworld() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    let animationFrameId: number;

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const parent = canvas.parentElement!;
        const width = parent.clientWidth;
        const height = parent.clientHeight;
        console.log(width, height);
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        const renderer = canvas ? new THREE.WebGLRenderer({ canvas }) : new THREE.WebGLRenderer();
        const spaceTexture = new THREE.TextureLoader().load('/3dworld/2k_stars.jpg');
        scene.background = spaceTexture;
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(width, height);
        camera.position.setZ(30);
        camera.position.setX(-3);

        renderer.render(scene, camera);

        const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
        const texture = new THREE.TextureLoader().load('/3dworld/2k_earth_daymap.jpg');
        const normalTexture = new THREE.TextureLoader().load('/3dworld/2k_earth_clouds.jpg');
        const material = new THREE.MeshLambertMaterial ({ 
            map: texture,
            normalMap: normalTexture
        });
        const torus = new THREE.Mesh(geometry, material);

        scene.add(torus);

        // Lights

        const pointLight = new THREE.PointLight(0xffffff, 2);
        pointLight.position.set(0, 0, 20);

        const ambientLight = new THREE.AmbientLight(0xffffff, 2);

        // Add both lights to the scene
        scene.add(pointLight, ambientLight);

        // Helpers
        const lightHelper = new THREE.PointLightHelper(pointLight);
        const gridHelper = new THREE.GridHelper(200, 50);
        scene.add(lightHelper, gridHelper);


        function moveCamera() {
            const t = document.body.getBoundingClientRect().top;
            torus.rotation.x += 0.05;
            torus.rotation.y += 0.075;
            torus.rotation.z += 0.05;
        }
        const controls = new PointerLockControls(camera, renderer.domElement);

// Lock the pointer when the user clicks on the renderer's DOM element
        renderer.domElement.addEventListener('click', () => {
            controls.lock();
        });
        document.addEventListener('keydown', (event) => {
            switch (event.key) {
                case 'ArrowUp':
                    camera.position.z += 1;
                    moveCamera();
                    break;
                case 'ArrowDown':
                    camera.position.z -= 1;
                    moveCamera();
                    break;
                case 'ArrowLeft':
                    camera.position.x -= 1;
                    moveCamera();
                    break;
                case 'ArrowRight':
                    moveCamera();
                    camera.position.x += 0.1;
                    break;
                case 'PageUp':
                    camera.position.y += 1;
                    moveCamera();
                    break;
                case 'PageDown':
                    camera.position.y -= 1;
                    moveCamera();
                    break;
                case 's':
                    camera.rotation.x -= 0.1;
                    moveCamera();
                    break;
                case 'w':
                    camera.rotation.x += 0.1;
                    moveCamera();
                    break;
                case 'd':
                    camera.rotation.y -= 0.1;
                    moveCamera();
                    break;
                case 'a':
                    camera.rotation.y += 0.1;
                    moveCamera();
                    break;
            }
        });

        function addStar() {
            const geometry = new THREE.SphereGeometry(0.25, 24, 24);
            const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
            const star = new THREE.Mesh(geometry, material);
          
            const [x, y, z] = Array(3)
              .fill(1)
              .map(() => THREE.MathUtils.randFloatSpread(100));
          
            star.position.set(x, y, z);
            scene.add(star);
          }
          
          Array(200).fill(1).forEach(addStar);
        

        function animate() {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            animationFrameId = requestAnimationFrame(animate);

            torus.rotation.x += 0.01;
            torus.rotation.y += 0.005;
            torus.rotation.z += 0.01;

            renderer.render(scene, camera);
        }

        animate();

        // Add resize event listener
        window.addEventListener('resize', () => {
            const width = parent.clientWidth;
            const height = parent.clientHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        });
        // Cleanup function to cancel animation loop when component unmounts
        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div id='div3dworld'>
            <canvas id="3dworld" ref={canvasRef}></canvas>
        </div>
    );
}