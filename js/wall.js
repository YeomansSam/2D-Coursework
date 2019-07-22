class wall{
	draw(mainContext, pMatrix) {
        mainContext.beginPath();
        mainContext.fillStyle = "#ffffff";
        mainContext.moveTo(100, -50);
        mainContext.lineTo(100, 50);
        mainContext.lineTo(-100, 50);
        mainContext.lineTo(-100, -50);
        mainContext.closePath();
        mainContext.fill();
        mainContext.stroke();
        
    }
}