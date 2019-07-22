// the window load event handler
function onLoad() {
    var mainCanvas, mainContext, housePosition, houseScale,  houseRotation, houses,sunPosition, sunScale, sunRotation, suns, i, pWorldMatrix, rootNode;

    // this function will initialise our variables
    function initialiseCanvasContext() {
        // Find the canvas element using its id attribute.
        mainCanvas = document.getElementById('maincanvas');
        // if it couldn't be found
        if (!mainCanvas) {
            // make a message box pop up with the error.
            alert('Error: I cannot find the canvas elemnt!');
            return;
        }
        // Get the 2D canvas context.
        mainContext = mainCanvas.getContext('2d');
        if (!mainContext) {
            alert('Error: failed to get context!');
            return;
        }
        houses = [new House(new Vector(0,0,0),new Vector(1,1,1),Math.PI*0), new House(new Vector(-200,-100,0), new Vector(0.5,0.5,1),Math.PI/10)];
 
        suns = [new Sun(new Vector(-300,-300,0),new Vector(1,1,1),Math.PI*0,25)];

        
    }
	function initialiserootnode() {
		
		origin = new Vector(mainCanvas.width * 0.25, mainCanvas.height * 0.25);
		pWorldMatrix = Matrix.createTranslation(origin);
        origin = new Node(pWorldMatrix);
        rootNode = new Node(Matrix.createIdentity());
        rootNode.addChild(origin);
		origin.addChild(suns[0]);
		for(var i=0;i < houses.length; i++) {
			origin.addChild(houses[i]);
		}
		
	}

    function draw() {
        

        mainContext.lineWidth = 5;
       
        mainContext.fillStyle = "#99ffff";
        
        mainContext.fillRect(-400, -300, mainCanvas.width * 5 , mainCanvas.height * 5);
		
    }
		var lastTime = Date.now();
	function animationLoop() {
		
		var thisTime = Date.now();
		var deltaTime = (thisTime - lastTime)/1000 ;
		suns[0].update(deltaTime);
		draw();
		RootNode();
		
		lastTime = thisTime;
	    requestAnimationFrame(animationLoop);
	}
	
	function RootNode() {
		 rootNode.draw(mainContext, pWorldMatrix);
	}
    initialiseCanvasContext();
	initialiserootnode();
	animationLoop();
	
	
	
}

window.addEventListener('load', onLoad, false);