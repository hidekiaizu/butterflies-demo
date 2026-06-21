"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

const extrusion: THREE.ExtrudeGeometryOptions = {
  depth: 0.4,
  bevelEnabled: true,
  bevelSegments: 3,
  steps: 1,
  bevelSize: 0.07,
  bevelThickness: 0.1,
  curveSegments: 12,
};

function upperWingShape() {
  const shape = new THREE.Shape();
  shape.moveTo(-0.16, 0.13);
  shape.bezierCurveTo(-0.48, 0.96, -0.87, 1.66, -1.57, 1.91);
  shape.bezierCurveTo(-2.18, 2.14, -2.65, 2.61, -3.1, 2.76);
  shape.bezierCurveTo(-3.58, 2.91, -3.78, 2.61, -3.45, 2.27);
  shape.bezierCurveTo(-3.02, 1.82, -2.78, 0.91, -2.15, 0.21);
  shape.bezierCurveTo(-1.66, -0.33, -0.79, -0.45, -0.16, 0.13);
  shape.closePath();

  const cutout = new THREE.Path();
  cutout.absellipse(-1.92, 1.04, 0.48, 0.62, 0, Math.PI * 2, false, -0.28);
  shape.holes.push(cutout);
  return shape;
}

function lowerWingShape() {
  const shape = new THREE.Shape();
  shape.moveTo(-0.15, -0.08);
  shape.bezierCurveTo(-0.72, -0.2, -1.17, -0.42, -1.67, -0.48);
  shape.bezierCurveTo(-2.45, -0.58, -2.88, -0.83, -3.02, -1.25);
  shape.bezierCurveTo(-3.18, -1.73, -2.77, -2.09, -2.3, -2.24);
  shape.bezierCurveTo(-1.99, -2.34, -2.16, -2.93, -2.03, -3.34);
  shape.bezierCurveTo(-1.91, -3.76, -1.47, -3.7, -1.43, -3.28);
  shape.bezierCurveTo(-1.39, -2.88, -1.52, -2.56, -1.2, -2.11);
  shape.bezierCurveTo(-0.73, -1.45, -0.42, -0.55, -0.15, -0.08);
  shape.closePath();

  const cutout = new THREE.Path();
  cutout.absellipse(-2.14, -1.38, 0.3, 0.38, 0, Math.PI * 2, false, 0.16);
  shape.holes.push(cutout);
  return shape;
}

export function ChromeButterflyLogo() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(31, 1, 0.1, 100);
    camera.position.set(0, -0.15, 13);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
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
    const darkChrome = new THREE.MeshPhysicalMaterial({
      color: 0xc7c9ce,
      metalness: 1,
      roughness: 0.16,
      clearcoat: 1,
      envMapIntensity: 3,
    });
    const upperGeometry = new THREE.ExtrudeGeometry(upperWingShape(), extrusion);
    const lowerGeometry = new THREE.ExtrudeGeometry(lowerWingShape(), extrusion);
    const butterfly = new THREE.Group();
    const wings = new THREE.Group();

    const upperLeft = new THREE.Mesh(upperGeometry, [chromeFace, chromeEdge]);
    const upperRight = new THREE.Mesh(upperGeometry, [chromeFace, chromeEdge]);
    upperRight.scale.x = -1;

    const lowerLeft = new THREE.Mesh(lowerGeometry, [chromeFace, chromeEdge]);
    const lowerRight = new THREE.Mesh(lowerGeometry, [chromeFace, chromeEdge]);
    lowerRight.scale.x = -1;

    [upperLeft, upperRight, lowerLeft, lowerRight].forEach((wing) => {
      wing.position.z = -0.12;
      wings.add(wing);
    });

    const thorax = new THREE.Mesh(new THREE.SphereGeometry(0.36, 40, 28), darkChrome);
    thorax.scale.set(0.82, 1.22, 0.88);
    thorax.position.set(0, 0.16, 0.3);

    const abdomen = new THREE.Mesh(new THREE.CapsuleGeometry(0.23, 1.38, 12, 30), darkChrome);
    abdomen.position.set(0, -0.83, 0.25);
    abdomen.scale.z = 1.18;

    const head = new THREE.Mesh(new THREE.SphereGeometry(0.29, 36, 24), chromeFace);
    head.position.set(0, 0.72, 0.28);

    const antennaMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xc7cad0,
      metalness: 1,
      roughness: 0.11,
      envMapIntensity: 2.5,
    });
    const makeAntenna = (direction: -1 | 1) => {
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(direction * 0.1, 0.88, 0.25),
        new THREE.Vector3(direction * 0.24, 1.48, 0.23),
        new THREE.Vector3(direction * 0.48, 2.15, 0.2),
        new THREE.Vector3(direction * 0.68, 2.67, 0.16),
      ]);
      const antenna = new THREE.Group();
      antenna.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 32, 0.06, 10, false), antennaMaterial));
      const tip = new THREE.Mesh(new THREE.SphereGeometry(0.14, 20, 14), antennaMaterial);
      tip.scale.set(1.2, 1.55, 0.9);
      tip.position.set(direction * 0.68, 2.67, 0.16);
      antenna.add(tip);
      return antenna;
    };

    butterfly.add(wings, thorax, abdomen, head, makeAntenna(-1), makeAntenna(1));
    butterfly.rotation.x = -0.13;
    butterfly.scale.setScalar(0.92);
    scene.add(butterfly);

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
      if (now - lastRender < 1000 / 18) return;
      lastRender = now;
      const elapsed = (now - start) / 1000;
      butterfly.rotation.y = elapsed * 0.42;
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
