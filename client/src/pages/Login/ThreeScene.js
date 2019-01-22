import React, { Component } from "react";
import * as THREE from "three";
class ThreeScene extends Component {
  componentDidMount() {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;
    //ADD SCENE
    this.scene = new THREE.Scene();
    //ADD CAMERA
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 15;
    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setClearColor("#000000");
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);
    //ADD CUBE
    // const geometry = new THREE.TorusKnotBufferGeometry(4, 0.5, 60, 60, 13, 10);
    const geometry = new THREE.SphereBufferGeometry(5, 8, 32, 0, 0.8, 2, 5.8);
    const material = new THREE.MeshStandardMaterial({ color: 0xee3333 });
    this.object = new THREE.Mesh(geometry, material);
    this.object.castShadow = true;
    this.scene.add(this.object);

    //ADD LIGHT
    this.light = new THREE.SpotLight(0xeeee33, 0.6);
    this.scene.add(this.light);
    this.light.position.set(3, 4, 15);

    this.light.castShadow = true;
    this.light.shadow.mapSize.width = 2048;
    this.light.shadow.mapSize.height = 2048;
    this.light.shadow.camera.near = 0.1;
    this.light.shadow.camera.far = 500;

    this.light = new THREE.SpotLight(0xeeee33, 0.4);
    this.scene.add(this.light);
    this.light.position.set(-5, 15, 5);

    this.light.castShadow = true;
    this.light.shadow.mapSize.width = 2048;
    this.light.shadow.mapSize.height = 2048;
    this.light.shadow.camera.near = 0.1;
    this.light.shadow.camera.far = 500;

    this.light = new THREE.AmbientLight(0xffffff); // soft white light
    this.scene.add(this.light);

    //ADD PLANE GEOMETRY
    const planeGeometry = new THREE.PlaneBufferGeometry(500, 500, 32, 32);
    const planeMaterial = new THREE.MeshStandardMaterial({ color: 0xeeaa33 });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = (Math.PI / 180) * -90;
    plane.position.y = -6;
    plane.receiveShadow = true;
    this.scene.add(plane);

    const planeGeometry2 = new THREE.PlaneBufferGeometry(500, 500, 32, 32);
    const planeMaterial2 = new THREE.MeshStandardMaterial({ color: 0xeea333 });
    const plane2 = new THREE.Mesh(planeGeometry2, planeMaterial2);
    plane2.position.z = -50;
    plane2.receiveShadow = true;
    this.scene.add(plane2);

    this.start();
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
    this.object.rotation.x += 0.01;
    this.object.rotation.y += 0.01;

    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  };
  renderScene = () => {
    //update renderer to use shadowmap
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.render(this.scene, this.camera);
  };
  render() {
    return (
      <div
        style={{ width: "400px", height: "400px" }}
        ref={mount => {
          this.mount = mount;
        }}
      />
    );
  }
}
export default ThreeScene;
