import * as THREE from 'three'
import alphaTexture from '../images/bldg.jpg';
// import 

export default scene => {    
    const group = new THREE.Group();
    
    const subjectGeometry = deformGeometry(new THREE.ConeGeometry(4, 2));

    //color: "#FFC107", alphaTest: 0.8   transparent: true, side: THREE.DoubleSide, 
    
    const subjectMaterial = new THREE.MeshStandardMaterial({color: "#FDFEFE", transparent: false, side: THREE.DoubleSide,  });
    subjectMaterial.alphaMap = new THREE.TextureLoader().load(alphaTexture);
    subjectMaterial.alphaMap.magFilter = THREE.NearestFilter;
    subjectMaterial.alphaMap.wrapT = THREE.RepeatWrapping;
    subjectMaterial.alphaMap.repeat.y = 4;

    const subjectMesh = new THREE.Mesh(subjectGeometry, subjectMaterial);
        
    const subjectWireframe = new THREE.LineSegments(
        new THREE.EdgesGeometry(subjectGeometry),
        new THREE.LineBasicMaterial()
    );

    group.add(subjectMesh);
    // group.add(subjectWireframe);
    scene.add(group);

    // group.rotation.z = Math.PI/2;

    const speed = -0.;
    const textureOffsetSpeed = 0.03;

    function deformGeometry(geometry) {
        for (let i=0; i<geometry.vertices.length; i+=2) {
            const scalar = 1 + Math.random()*0.7;
            geometry.vertices[i].multiplyScalar(scalar)
        }

        return geometry;
    }

    function update(time) {
        const angle = time*speed;

        group.rotation.y = angle;

        subjectMaterial.alphaMap.offset.y = 0.55 + time * textureOffsetSpeed;

        // subjectWireframe.material.color.setHSL( Math.sin(angle*2), 0.5, 0.5 );
        
        const scale = (Math.sin(angle*8)+6.4)/5;
        subjectWireframe.scale.set(scale, scale, scale)
    }

    return {
        update
    }
}