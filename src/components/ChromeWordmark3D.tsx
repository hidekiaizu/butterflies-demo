"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import helvetikerBold from "@/assets/helvetiker_bold.typeface.json";

export function ChromeWordmark3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const testCanvas = document.createElement("canvas");
    const canRender = Boolean(testCanvas.getContext("webgl2") ?? testCanvas.getContext("webgl"));
    if (!canRender) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    } catch {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 100);
    camera.position.set(0, 0, 24);

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0xffffff, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.55;
    mount.appendChild(renderer.domElement);

    const pmrem = new THREE.PMREMGenerator(renderer);
    const environment = pmrem.fromScene(new RoomEnvironment(), 0.04);
    scene.environment = environment.texture;

    const chromeFace = new THREE.MeshPhysicalMaterial({
      color: 0xf4f4f4,
      metalness: 1,
      roughness: 0.13,
      clearcoat: 1,
      clearcoatRoughness: 0.04,
      envMapIntensity: 3.3,
    });
    const chromeEdge = new THREE.MeshPhysicalMaterial({
      color: 0x41454d,
      metalness: 1,
      roughness: 0.2,
      clearcoat: 1,
      envMapIntensity: 2.6,
    });

    const font = new FontLoader().parse(helvetikerBold);
    const geometry = new TextGeometry("Butterflies.", {
      font,
      size: 1.68,
      depth: 0.34,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 0.055,
      bevelSize: 0.035,
      bevelSegments: 4,
    });
    geometry.computeBoundingBox();
    geometry.center();

    const wordmark = new THREE.Mesh(geometry, [chromeFace, chromeEdge]);
    const baseRotation = {
      x: -0.08,
      y: -0.2,
      z: -Math.PI / 2,
    };
    wordmark.rotation.set(baseRotation.x, baseRotation.y, baseRotation.z);
    scene.add(wordmark);

    const keyLight = new THREE.DirectionalLight(0xffffff, 5.5);
    keyLight.position.set(0, 5, 8);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 4.2);
    rimLight.position.set(5, -1, 5);
    scene.add(rimLight);
    scene.add(new THREE.HemisphereLight(0xffffff, 0x444444, 1.8));

    const resize = () => {
      const { width, height } = mount.getBoundingClientRect();
      renderer.setSize(width, height);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
      const scale = Math.min(width / 115, height / 1850);
      wordmark.scale.setScalar(Math.max(scale, 0.28));
      renderer.render(scene, camera);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mount);
    resize();

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const start = performance.now();
    let frame = 0;
    let lastRender = 0;
    const animate = (now: number) => {
      frame = requestAnimationFrame(animate);
      if (now - lastRender < 1000 / 30) return;
      lastRender = now;
      const elapsed = (now - start) / 1000;
      wordmark.rotation.set(
        baseRotation.x + Math.sin(elapsed * 0.8) * 0.025,
        baseRotation.y + Math.sin(elapsed * 0.6) * 0.08,
        baseRotation.z,
      );
      renderer.render(scene, camera);
    };

    if (!reduceMotion) {
      frame = requestAnimationFrame(animate);
    }

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      geometry.dispose();
      chromeFace.dispose();
      chromeEdge.dispose();
      environment.dispose();
      pmrem.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="h-[128vh] w-full"
      aria-hidden="true"
    />
  );
}
