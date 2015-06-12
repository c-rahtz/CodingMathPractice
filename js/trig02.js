window.onload = function() {
    console.log("window load");
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    var centerY = height * 0.5,
        centerX = width * 0.5,
        baseRadius = 100
        offset = height * 0.4,
        sizeOffset = 50,
        speed = 0.04,
        angle = 0,
        render = function() {
        	// console.log(angle);
            var y = centerY + Math.sin(angle) * sizeOffset;
            var radius = baseRadius + Math.sin(angle) * sizeOffset;
            context.clearRect(0, 0, width, height);
            context.beginPath();
            context.arc(centerX, centerY, radius, 0, Math.PI * 2, false);

            context.fill();
            angle += speed;
            requestAnimationFrame(render);
        };


    render();

}