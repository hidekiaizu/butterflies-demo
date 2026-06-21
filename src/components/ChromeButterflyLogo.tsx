"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

const extrusion: THREE.ExtrudeGeometryOptions = {
  depth: 0.34,
  bevelEnabled: true,
  bevelSegments: 5,
  steps: 1,
  bevelSize: 0.09,
  bevelThickness: 0.09,
  curveSegments: 28,
};

function upperWingShape() {
  const shape = new THREE.Shape();
  shape.moveTo(-0.17, 0.18);
  shape.bezierCurveTo(-0.48, 1.25, -1.73, 2.24, -2.72, 1.96);
  shape.bezierCurveTo(-3.52, 1.73, -3.48, 0.66, -2.91, 0.08);
  shape.bezierCurveTo(-2.23, -0.61, -1.04, -0.47, -0.17, 0.18);
  return shape;
}

function lowerWingShape() {
  const shape = new THREE.Shape();
  shape.moveTo(-0.2, -0.02);
  shape.bezierCurveTo(-0.97, -0.38, -2.43, -0.64, -2.7, -1.51);
  shape.bezierCurveTo(-2.98, -2.42, -1.93, -2.71, -1.13, -2.18);
  shape.bezierCurveTo(-0.48, -1.75, -0.18, -0.76, -0.2, -0.02);
  return shape;
}

export function ChromeButterflyLogo() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(31, 1, 0.1, 100);
    camera.position.set(0, 0.05, 10.5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0xffffff, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    mount.appendChild(renderer.domElement);

    const pmrem = new THREE.PMREMGenerator(renderer);
    const environment = pmrem.fromScene(new RoomEnvironment(), 0.04);
    scene.environment = environment.texture;

    const chromeFace = new THREE.MeshPhysicalMaterial({
      color: 0xd9dce2,
      metalness: 1,
      roughness: 0.08,
      clearcoat: 1,
      clearcoatRoughness: 0.06,
      envMapIntensity: 2.8,
    });
    const chromeEdge = new THREE.MeshPhysicalMaterial({
      color: 0x747983,
      metalness: 1,
      roughness: 0.15,
      clearcoat: 1,
      envMapIntensity: 2.3,
    });
    const darkChrome = new THREE.MeshPhysicalMaterial({
      color: 0x969ba5,
      metalness: 1,
      roughness: 0.12,
      clearcoat: 1,
      envMapIntensity: 2.6,
    });

    const upperGeometry = new THREE.ExtrudeGeometry(upperWingShape(), extrusion);
    const lowerGeometry = new THREE.ExtrudeGeometry(lowerWingShape(), extrusion);
    const butterfly = new THREE.Group();
    const wings = new THREE.Group();

    const upperLeft = new THREE.Mesh(upperGeometry, [chromeFace, chromeEdge]);
    const upperRight = new THREE.Mesh(upperGeometry, [chromeFace, chromeEdge]);
    upperRight.scale.x = -1;
    upperLeft.rotation.y = -0.1;
    upperRight.rotation.y = 0.1;

    const lowerLeft = new THREE.Mesh(lowerGeometry, [chromeFace, chromeEdge]);
    const lowerRight = new THREE.Mesh(lowerGeometry, [chromeFace, chromeEdge]);
    lowerRight.scale.x = -1;
    lowerLeft.rotation.y = -0.08;
    lowerRight.rotation.y = 0.08;

    [upperLeft, upperRight, lowerLeft, lowerRight].forEach((wing) => {
      wing.position.z = -0.12;
      wing.castShadow = true;
      wings.add(wing);
    });

    const thorax = new THREE.Mesh(new THREE.SphereGeometry(0.36, 40, 28), darkChrome);
    thorax.scale.set(0.82, 1.22, 0.88);
    thorax.position.set(0, 0.16, 0.3);
    thorax.castShadow = true;

    const abdomen = new THREE.Mesh(new THREE.CapsuleGeometry(0.23, 1.38, 12, 30), darkChrome);
    abdomen.position.set(0, -0.83, 0.25);
    abdomen.scale.z = 1.18;
    abdomen.castShadow = true;

    const head = new THREE.Mesh(new THREE.SphereGeometry(0.29, 36, 24), chromeFace);
    head.position.set(0, 0.72, 0.28);
    head.castShadow = true;

    const antennaMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xc7cad0,
      metalness: 1,
      roughness: 0.11,
      envMapIntensity: 2.5,
    });
    const makeAntenna = (direction: -1 | 1) => {
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(direction * 0.12, 0.88, 0.25),
        new THREE.Vector3(direction * 0.3, 1.28, 0.24),
        new THREE.Vector3(direction * 0.68, 1.58, 0.2),
        new THREE.Vector3(direction * 0.96, 1.52, 0.16),
      ]);
      const antenna = new THREE.Mesh(new THREE.TubeGeometry(curve, 32, 0.035, 10, false), antennaMaterial);
      antenna.castShadow = true;
      return antenna;
    };

    butterfly.add(wings, thorax, abdomen, head, makeAntenna(-1), makeAntenna(1));
    butterfly.rotation.x = -0.13;
    butterfly.scale.setScalar(0.92);
    scene.add(butterfly);

    const keyLight = new THREE.DirectionalLight(0xffffff, 5.5);
    keyLight.position.set(0, 5, 8);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.set(1024, 1024);
    keyLight.shadow.camera.near = 1;
    keyLight.shadow.camera.far = 20;
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 4.2);
    rimLight.position.set(5, -1, 5);
    scene.add(rimLight);
    scene.add(new THREE.HemisphereLight(0xffffff, 0x444444, 1.8));

    const shadow = new THREE.Mesh(
      new THREE.PlaneGeometry(9, 7),
      new THREE.ShadowMaterial({ color: 0x000000, opacity: 0.2 }),
    );
    shadow.position.z = -1.05;
    shadow.receiveShadow = true;
    scene.add(shadow);

    const resize = () => {
      const { width, height } = mount.getBoundingClientRect();
      renderer.setSize(width, height, false);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
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
      butterfly.rotation.y = elapsed * 0.52;
      butterfly.position.y = Math.sin(elapsed * 1.1) * 0.06;
      upperLeft.rotation.z = Math.sin(elapsed * 0.85) * 0.018;
      upperRight.rotation.z = -upperLeft.rotation.z;
      renderer.render(scene, camera);
    };

    if (reduceMotion) {
      butterfly.rotation.y = -0.45;
      renderer.render(scene, camera);
    } else {
      frame = requestAnimationFrame(animate);
    }

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      upperGeometry.dispose();
      lowerGeometry.dispose();
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh && object.geometry !== upperGeometry && object.geometry !== lowerGeometry) {
          object.geometry.dispose();
        }
      });
      chromeFace.dispose();
      chromeEdge.dispose();
      darkChrome.dispose();
      antennaMaterial.dispose();
      environment.dispose();
      pmrem.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="pointer-events-none absolute left-[50vw] top-[14vh] z-10 h-24 w-28 -translate-x-1/2 sm:h-28 sm:w-32 md:top-[10vh] md:h-32 md:w-36"
      aria-hidden="true"
    />
  );
}
