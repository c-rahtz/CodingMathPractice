function render() {
	requestAnimationFrame( render );
	renderer.render( scene, camera );
}

function init3d() {
	console.log("init3d");
	var scene = new THREE.Scene(),
		camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000),
		renderer = new THREE.WebGLRenderer(),
		geometry = new THREE.BoxGeometry( 1, 1, 1),
		material = new THREE.MeshBasicMaterial( {color: 0xab2222}),
		cube = new THREE.Mesh(geometry, material);


		renderer.setSize( window.innerWidth, window.innerHeight );
		document.body.appendChild(renderer.domElement);

		scene.add(cube);
		camera.position.z = 5;

		render();

}
window.onload = function() {
	var cvas = document.getElementById('canvas'),
	context = canvas.getContext("2d"),
	width = canvas.width = window.innerWidth,
	height = canvas.height = window.innerHeight;
	context.fillRect(0,0, width, height);

	init3d();
}