class door{
	 draw(mainContext) {
        mainContext.beginPath();
        mainContext.fillStyle = "#ff6600";
        mainContext.moveTo(25, -40);
        mainContext.lineTo(25,40);
        mainContext.lineTo(-25, 40);
        mainContext.lineTo(-25, -40);
		mainContext.closePath();
        mainContext.fill();
        mainContext.stroke();
        
    }
}