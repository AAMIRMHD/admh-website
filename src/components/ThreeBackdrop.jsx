import { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeBackdrop = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const geometry = new THREE.TorusKnotGeometry(1.2, 0.35, 120, 16);
    const material = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.85,
      roughness: 0.2,
      emissive: 0x1b1b1b,
    });
    const knot = new THREE.Mesh(geometry, material);
    scene.add(knot);

    const ambient = new THREE.AmbientLight(0xffffff, 0.4);
    const point = new THREE.PointLight(0xffffff, 0.8);
    point.position.set(3, 4, 6);
    scene.add(ambient, point);

    let frame;
    const animate = () => {
      knot.rotation.x += 0.003;
      knot.rotation.y += 0.004;
      renderer.render(scene, camera);
      frame = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", handleResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute right-8 top-28 hidden h-72 w-72 opacity-60 lg:block" />;
};

export default ThreeBackdrop;
