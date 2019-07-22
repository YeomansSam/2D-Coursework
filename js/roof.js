class roof{
	 draw(mainContext) {
        mainContext.beginPath();
        mainContext.fillStyle = "#ff0000";
        mainContext.moveTo(0, -50);
        mainContext.lineTo(100, 50);
        mainContext.lineTo(-100, 50);
        mainContext.closePath();
        mainContext.fill();
        mainContext.stroke();
        
    }
}