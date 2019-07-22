class windowleft{
	 draw(mainContext) {
        mainContext.beginPath();
		mainContext.fillStyle = '#9ae1e5';
		mainContext.arc(0,0,25,0,2*Math.PI,false);
		mainContext.stroke();
		mainContext.moveTo(25,0);
		mainContext.lineTo(-25,0);
		mainContext.stroke();
		mainContext.moveTo(0,25);
		mainContext.lineTo(0,-25);
		mainContext.fill();
		mainContext.stroke();
}
}