import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import fragment from "./shaders/fragment.glsl";
import vertex from "./shaders/vertex.glsl";
const Scene = () => {
  const { useRef, useEffect, useState } = React;
  const mount = useRef(null);
  let time = 0;
  const controls = useRef(null);

  useEffect(() => {
    let width = mount.current.clientWidth;
    let height = mount.current.clientHeight;
    let frameId;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    const geometry = new THREE.SphereGeometry(5, 20, 20);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: {
          value: 0
        }
      },

      fragmentShader: fragment,
      vertexShader: vertex,
      wireframe: true
    });
    const cube = new THREE.Mesh(geometry, material);

    camera.position.z = 4;
    scene.add(cube);
    renderer.setClearColor("#800080");
    renderer.setSize(width, height);

    const renderScene = () => {
      renderer.render(scene, camera);
    };

    const handleResize = () => {
      width = mount.current.clientWidth;
      height = mount.current.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderScene();
    };

    const animate = () => {
      time += 0.05;
      cube.rotation.x += 0.001;
      cube.rotation.y += 0.001;
      material.uniforms.time.value = time;
      renderScene();
      frameId = window.requestAnimationFrame(animate);
    };

    const start = () => {
      if (!frameId) {
        frameId = requestAnimationFrame(animate);
      }
    };

    const stop = () => {
      cancelAnimationFrame(frameId);
      frameId = null;
    };

    mount.current.appendChild(renderer.domElement);
    window.addEventListener("resize", handleResize);
    start();

    controls.current = { start, stop };

    return () => {
      stop();
      window.removeEventListener("resize", handleResize);

      scene.remove(cube);
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return <div className="vis" ref={mount} />;
};

export default Scene;
