function init3d() {
    console.log("init3d");
    var scene = new THREE.Scene(),
        camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 1000),
        renderer = new THREE.WebGLRenderer(),
        clock = new THREE.Clock(),
        //geometry = new THREE.BoxGeometry(1, 1, 1),
        material = new THREE.MeshBasicMaterial({
            color: 0xab2222,
            wireframe: true
        }),
        //cube = new THREE.Mesh(geometry, material),
        objLoader = new THREE.JSONLoader(),
        obj;

    render = function() {
        // for reference: http://stackoverflow.com/questions/11363170/units-of-three-js-calculating-rotation-orbit-speeds
        var t = clock.getElapsedTime();
        //console.log("time: " + t);
        requestAnimationFrame(render);
        obj.rotation.x += -0.01;
        obj.rotation.y += 0.01;
        obj.position.y = Math.sin(t);
        renderer.render(scene, camera);
    }

    objLoader.load('objects/c-letter.json', function(geometry) {
        obj = new THREE.Mesh(geometry, material);
        scene.add(obj);
        render();
    })


    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    //scene.add(cube);
    camera.position.z = 5;


    

}
window.onload = function() {
    init3d();
}