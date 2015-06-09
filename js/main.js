window.onload = function() {
	console.log("jello.");
	var cvas = document.getElementById('canvas'),
	context = canvas.getContext("2d"),
	width = canvas.width = window.innerWidth,
	height = canvas.height = window.innerHeight;

	context.fillRect(0,0, width, height);

}