import React, { Component } from "react";
import * as THREE from "three";
// import waterImg from "./water.jpg";
// import negx from "./negx.jpg";
// import negy from "./negy.jpg";
// import negz from "./negz.jpg";
// import posx from "./posx.jpg";
// import posy from "./posy.jpg";
// import posz from "./posz.jpg";
// var OrbitControls = require("three-orbit-controls")(THREE); ---not working
import OrbitControls from "orbit-controls-es6";

class ThreeScene extends Component {
  componentDidMount() {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;
    //ADD SCENE
    this.scene = new THREE.Scene();
    //this.scene.background = new THREE.Color(0x3a3e42);
    this.scene.fog = new THREE.FogExp2(0xaaccff, 0.0007);

    //ADD CAMERA
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 15;
    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setClearColor("#000000");
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);

    //ADD orbit control
    // const controls = new OrbitControls(this.camera);
    // controls.target.set(0, 0, 0);
    const controls = new OrbitControls(this.camera, this.renderer.domElement);
    controls.enabled = true;
    controls.maxDistance = 100;
    controls.minDistance = 0;

    //ADD CUBE
    const geometry = new THREE.ConeGeometry(10, 20, 4, 1, false, 6, 6.3);

    //NEW: load texture
    // const texture = new THREE.TextureLoader().load("../assets/water.jpg");
    // texture.wrapS = THREE.RepeatWrapping;
    // texture.wrapT = THREE.RepeatWrapping;
    // texture.repeat.set(4, 1);

    //load an environmental map
    const envMap = new THREE.CubeTextureLoader().load([
      "../assets/posx.jpg",
      "../assets/negx.jpg",
      "../assets/posy.jpg",
      "../assets/negy.jpg",
      "../assets/posz.jpg",
      "../assets/negz.jpg"
    ]);

    //apply envMap to scene
    this.scene.background = envMap;

    const material = new THREE.MeshPhysicalMaterial({
      //map: texture,
      envMap: envMap,
      transparent: true,
      opacity: 0.8,
      metalness: 1.5,
      roughness: 0.1
    });

    this.object = new THREE.Mesh(geometry, material);
    //this.object.castShadow = true;
    this.object.scale.x = 0.4;
    this.object.scale.y = 0.4;
    this.object.scale.z = 0.4;
    //this.object.position.set(2, 2, 2);
    this.scene.add(this.object);

    //ADD LIGHT
    this.light = new THREE.AmbientLight(0xffeecc, 0.4);
    this.scene.add(this.light);

    this.light = new THREE.DirectionalLight(0xffdd99, 1.9);
    this.scene.add(this.light);
    this.light.position.set(-10, 10, 0);

    this.start();
    controls.update();
  }
  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }
  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  };
  stop = () => {
    cancelAnimationFrame(this.frameId);
  };

  animate = () => {
    this.object.rotation.x += 0.005;
    this.object.rotation.y += 0.005;
    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  };
  renderScene = () => {
    this.renderer.render(this.scene, this.camera);
  };
  render() {
    return (
      <div
        style={{ width: "1680px", height: "708px" }}
        ref={mount => {
          this.mount = mount;
        }}
      />
    );
  }
}
export default ThreeScene;
