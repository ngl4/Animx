import * as THREE from 'three'

export default scene => {    

    const lightIn = new THREE.PointLight("#0B0B0B");
    const lightOut = new THREE.PointLight("#0B0B0B");
    lightOut.position.set(40,20,40);

    scene.add(lightIn);
    scene.add(lightOut);

    const rad = 80;

    function update(time) {
        const x = rad * Math.sin(time*0.2)
        lightOut.position.x = x;
    }

    return {
        update
    }
}