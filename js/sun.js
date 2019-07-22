class Sun {
	constructor(pPosition, pScale, pRotation,pSpeed) {
        this.setPosition(pPosition);
        this.setScale(pScale);
		this.setRotation(pRotation);
		this.sunspeed = pSpeed;
		this.initialisescenegraph();
	}
	initialisescenegraph(){
		var translate = Matrix.createTranslation(this.getPosition());
        var scale = Matrix.createScale(this.getScale());
        var rotation = Matrix.createRotation(this.getRotation());
		
		var TranslationNode = new Node(translate);
		var RotationNode = new Node (rotation);
		var ScaleNode = new Node (scale);
		var sunlinesNode = new sunlines();
		
		TranslationNode.addChild(RotationNode);
		RotationNode.addChild(ScaleNode);
		
		ScaleNode.addChild(sunlinesNode);
		
		
		this.setSceneGraph(TranslationNode);
	}
	update(deltaTime){
		this.getPosition().setX(this.getPosition().getX() +(this.sunspeed * deltaTime));
		if(this.getPosition().getX() > 400) {
			this.getPosition().setX(-400);
		}
		this.getSceneGraph().setNode(Matrix.createTranslation(this.getPosition()));
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