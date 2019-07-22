class House {
    constructor(pPosition, pScale, pRotation) {
        this.setPosition(pPosition);
        this.setScale(pScale);
        this.setRotation(pRotation);
        this.initialisescenegraph();
		
    }
	initialisescenegraph(){
		var translate = Matrix.createTranslation(this.getPosition());
        var scale = Matrix.createScale(this.getScale());
        var rotation = Matrix.createRotation(this.getRotation());
		
		var TranslationNode = new Node(translate);
		var RotationNode = new Node (rotation);
		var ScaleNode = new Node (scale);
		var wallNode = new Node(Matrix.createTranslation(new Vector(0,80,0)));
		var roofNode = new Node(Matrix.createTranslation(new Vector(0,-20,0)));
		var doorNode = new Node(Matrix.createTranslation(new Vector(0,90,0)));
		var windowleftNode = new Node(Matrix.createTranslation(new Vector(-60,80,0)));
		var windowrightNode = new Node(Matrix.createTranslation(new Vector(60,80,0)));
		var chimneyNode = new Node(Matrix.createTranslation(new Vector(0,-20,0)));
		
		
		TranslationNode.addChild(RotationNode);
		RotationNode.addChild(ScaleNode);
		
		ScaleNode.addChild(wallNode);
		ScaleNode.addChild(roofNode);
		ScaleNode.addChild(doorNode);
		ScaleNode.addChild(windowleftNode);
		ScaleNode.addChild(windowrightNode);
		ScaleNode.addChild(chimneyNode);
		
		wallNode.addChild(new wall());
		roofNode.addChild(new roof());
		doorNode.addChild(new door());
		windowleftNode.addChild(new windowleft());
		windowrightNode.addChild(new windowright());
		chimneyNode.addChild(new chimney());
		
		this.setSceneGraph(TranslationNode);
	}
    draw(pContext, pWorldMatrix) {
        
        this.getSceneGraph().draw(pContext, pWorldMatrix);
    }
	
    
    getPosition() {

        return this.mPosition;
    }
    setPosition(pPosition) {
        this.mPosition = pPosition;
    }
	getScale() {
		return this.mScale;
	}
	setScale(pScale) {
		this.mScale = pScale;
	}
	getRotation() {
		return this.mRotation;
	}
	setRotation(pRotation) {
		this.mRotation = pRotation;
	}	
	getSceneGraph(){
		return this.mSceneGraph;
	}
	setSceneGraph(pSceneGraph){
		this.mSceneGraph = pSceneGraph;
	}
}
