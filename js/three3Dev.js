function init3d() {
    console.log("init3d");
    var scene = new THREE.Scene(),
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000),
        renderer = new THREE.WebGLRenderer(),
        geometry = new THREE.BoxGeometry(1, 1, 1),
        // material = new THREE.MeshBasicMaterial({
        //     color: 0xab2222
        // }),
        material = new THREE.MeshDepthMaterial({
            wireframe: true
        }),
        cube = new THREE.Mesh(geometry, material),
        clock = new THREE.Clock();

        render = function() {
            var t = clock.getElapsedTime();
            //console.log("time: " + t);
            requestAnimationFrame(render);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            cube.position.y = Math.sin(t);
            renderer.render(scene, camera);
        }


    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    scene.add(cube);
    camera.position.z = 5;


    render();

}
window.onload = function() {
    init3d();
}