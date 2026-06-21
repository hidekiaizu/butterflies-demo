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
  shape.moveTo(-0.16, 0.15);
  shape.lineTo(-0.58, 1.08);
  shape.lineTo(-1.17, 1.46);
  shape.lineTo(-1.34, 2.27);
  shape.lineTo(-1.78, 1.72);
  shape.lineTo(-2.62, 2.16);
  shape.lineTo(-2.5, 1.35);
  shape.lineTo(-3.4, 1.2);
  shape.lineTo(-2.79, 0.64);
  shape.lineTo(-3.11, 0.08);
  shape.lineTo(-2.03, -0.02);
  shape.lineTo(-1.42, -0.52);
  shape.lineTo(-0.62, -0.24);
  shape.closePath();
  return shape;
}

function lowerWingShape() {
  const shape = new THREE.Shape();
  shape.moveTo(-0.18, -0.05);
  shape.lineTo(-0.82, -0.38);
  shape.lineTo(-1.55, -0.43);
  shape.lineTo(-2.45, -0.78);
  shape.lineTo(-2.1, -1.18);
  shape.lineTo(-2.77, -1.76);
  shape.lineTo(-1.91, -1.76);
  shape.lineTo(-1.69, -2.52);
  shape.lineTo(-1.18, -1.91);
  shape.lineTo(-0.61, -2.17);
  shape.lineTo(-0.69, -1.31);
  shape.lineTo(-0.15, -0.65);
  shape.closePath();
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
    const insetChrome = new THREE.MeshPhysicalMaterial({
      color: 0x4e535c,
      metalness: 1,
      roughness: 0.22,
      clearcoat: 0.8,
      envMapIntensity: 2.2,
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

    const makeRidge = (points: THREE.Vector3[], direction: -1 | 1) => {
      const ridge = new THREE.Mesh(
        new THREE.TubeGeometry(
          new THREE.CatmullRomCurve3(points.map((point) => new THREE.Vector3(point.x * direction, point.y, point.z))),
          18,
          0.035,
          8,
          false,
        ),
        insetChrome,
      );
      wings.add(ridge);
    };

    ([-1, 1] as const).forEach((direction) => {
      makeRidge(
        [new THREE.Vector3(0.22, 0.18, 0.36), new THREE.Vector3(1.38, 1.1, 0.36), new THREE.Vector3(2.63, 1.38, 0.36)],
        direction,
      );
      makeRidge(
        [new THREE.Vector3(0.25, 0.04, 0.36), new THREE.Vector3(1.46, 0.32, 0.36), new THREE.Vector3(2.75, 0.58, 0.36)],
        direction,
      );
      makeRidge(
        [new THREE.Vector3(0.23, -0.18, 0.36), new THREE.Vector3(1.32, -0.88, 0.36), new THREE.Vector3(2.18, -1.55, 0.36)],
        direction,
      );
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
        new THREE.Vector3(direction * 0.12, 0.88, 0.25),
        new THREE.Vector3(direction * 0.3, 1.28, 0.24),
        new THREE.Vector3(direction * 0.68, 1.58, 0.2),
        new THREE.Vector3(direction * 0.96, 1.52, 0.16),
      ]);
      const antenna = new THREE.Mesh(new THREE.TubeGeometry(curve, 32, 0.035, 10, false), antennaMaterial);
      return antenna;
    };

    const bodyRings = [-0.42, -0.82, -1.22].map((y) => {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.235, 0.027, 8, 28), insetChrome);
      ring.position.set(0, y, 0.46);
      ring.rotation.x = Math.PI / 2;
      return ring;
    });

    butterfly.add(wings, thorax, abdomen, head, makeAntenna(-1), makeAntenna(1), ...bodyRings);
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
      insetChrome.dispose();
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
