class Node {
	constructor(pMatrix) {
		this.setNode(pMatrix);
		this.mChildren = [];
	}
	getNode(){
		return this.mMatrix;
	}
	setNode(pMatrix) {
		this.mMatrix = pMatrix;
	}
	getNumberofChildren(){
        var length = this.mChildren.length
        return length;
    }
	getChildAt(index) {
		return this.mChildren[index];
	}
	addChild(pChild) {
		this.mChildren.push(pChild);
		
	}
    draw(pContext, pWorldMatrix) {
        var transform = pWorldMatrix.multiply(this.getNode());
        transform.setTransform(pContext);
        for (var i = 0; i < this.getNumberofChildren(); i++)
        {
            this.getChildAt(i).draw(pContext, transform);
        }
        pWorldMatrix.setTransform(pContext);
	}
	
	}
	
	