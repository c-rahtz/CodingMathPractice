function init3d() {
    console.log("init3d");
    var scene = new THREE.Scene(),
        camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 1000),
        renderer = new THREE.WebGLRenderer({
            antialias: true
        }),
        clock = new THREE.Clock(),
        //geometry = new THREE.BoxGeometry(1, 1, 1),
        /*
        material = new THREE.MeshBasicMaterial({
                    color: 0xab2222,
                    wireframe: true
        }),
        */
        //cube = new THREE.Mesh(geometry, material),
        objLoader = new THREE.JSONLoader(),
        obj,
        aLight1 = new THREE.AreaLight(0xffffff),
        pLight1 = new THREE.PointLight(0x00ff00, 1, 40),
        amLight = new THREE.AmbientLight(0x404040, 3),
        group = new THREE.Group();

    render = function() {
        // for reference: http://stackoverflow.com/questions/11363170/units-of-three-js-calculating-rotation-orbit-speeds
        var t = clock.getElapsedTime();
        //console.log("time: " + t);
        requestAnimationFrame(render);
        //obj.rotation.x += -0.01;
        group.rotation.y -= 0.01;
        //obj.position.y = Math.sin(t);
        renderer.render(scene, camera);
    }



    objLoader.load('objects/Craig-WR.json', function(geometry, materials) {
        console.log(materials);
        var material = new THREE.MeshFaceMaterial(materials);
        obj = new THREE.Mesh(geometry, material);
        console.log(obj.geometry);
        group.add(obj);
        obj.position.x = -2;
        obj.rotation.x = Math.PI/2;
        scene.add(group);
        console.log("obj x: " + obj.position.x);
        render();
    })

    aLight1.position.set(0, 0, 5);
    aLight1.rotation.set(Math.PI/2, Math.PI, 0);
    aLight1.width = 8;
    aLight1.height = 2;

    pLight1.position.set(0, 0, 5);

    scene.add(aLight1);
    scene.add(amLight);
    scene.add(pLight1);

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    //scene.add(cube);
    camera.position.z = 8;




}
window.onload = function() {
    init3d();
}