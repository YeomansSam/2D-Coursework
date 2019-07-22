class chimney {
	 draw(mainContext) {
		 mainContext.beginPath();
		 mainContext.fillStyle = "#ff0000";
		 mainContext.moveTo(50,0);
		 mainContext.lineTo(50,-50);
		 mainContext.lineTo(75,-50);
		 mainContext.lineTo(75,25);
		 mainContext.closePath();
        mainContext.fill();
        mainContext.stroke();
	 }
}