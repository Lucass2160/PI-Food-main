import { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

export default function Food() {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentRef = mountRef.current;
    const { clientWidth: width, clientHeight: height } = currentRef;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(255, 255, 255);
    const camera = new THREE.PerspectiveCamera(25, width / height, 0.01, 1000);
    scene.add(camera);
    camera.position.z = 6;
    camera.position.x = 6;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    currentRef.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    controls.enableDamping = true;
    const material = new THREE.MeshNormalMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.lookAt(cube.position);


    const dracoLoader = new DRACOLoader()


    const gltfLoader = new GLTFLoader();
    gltfLoader.load(
        "../../../public/models/yellow_plaster_4k.gltf",
      (gltf) => {
        console.log(gltf);
        // Agrega el código para manejar el modelo cargado si es necesario
      }
    );
      


    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    const resize = () => {
      const updateWidth = currentRef.clientWidth;
      const updateHeight = currentRef.clientHeight;
      renderer.setSize(updateWidth, updateHeight);
      camera.aspect = updateWidth / updateHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", resize);


    animate();

    return () => {
      renderer.dispose();
      currentRef.removeChild(renderer.domElement);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100vh" }}></div>;
}
