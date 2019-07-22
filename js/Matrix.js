class Matrix {
    constructor(X1, Y1, Z1, X2, Y2, Z2, X3, Y3, Z3) {
        this.setVector1(X1, Y1, Z1);
        this.setVector2(X2, Y2, Z2);
        this.setVector3(X3, Y3, Z3);

    }
    getVector1() {
        return this.mVector1;
    }
    setVector1(X1, Y1, Z1) {
        this.mVector1 = new Vector(X1, Y1, Z1);
    }
    getVector2() {
        return this.mVector2;
    }
    setVector2(X2, Y2, Z2) {
        this.mVector2 = new Vector(X2, Y2, Z2);
    }
    getVector3() {
        return this.mVector3;
    }
    setVector3(X3, Y3, Z3) {
        this.mVector3 = new Vector(X3, Y3, Z3);
    }
    getElement(pRow, pCol) {
        var vector1 = this.getVector1();
        var vector2 = this.getVector2();
        var vector3 = this.getVector3();
        if (pRow == 0) {
            if (pCol == 0) {
                return vector1.getX();
            }
            else if (pCol == 1) {
                return vector1.getY();
            }
            else if (pCol == 2) {
                return vector1.getZ();
            }
        }
        else if (pRow == 1) {
            if (pCol == 0) {
                return vector2.getX();
            }
            else if (pCol == 1) {
                return vector2.getY();
            }
            else if (pCol == 2) {
                return vector2.getZ();
            }
        }
        else if (pRow == 2) {
            if (pCol == 0) {
                return vector3.getX();
            }
            else if (pCol == 1) {
                return vector3.getY();
            }
            else if (pCol == 2) {
                return vector3.getZ();
            }
        }
    }
    static createIdentity() {
        var matrix = new Matrix(1, 0, 0, 0, 1, 0, 0, 0, 1);
        return matrix;
    }
    static createTranslation(pVector) {
        var matrix = new Matrix(1, 0, pVector.getX(), 0, 1, pVector.getY(), 0, 0, 1);
        return matrix;
    }
    static createScale(pVector) {
        var matrix = new Matrix(pVector.getX(), 0, 0, 0, pVector.getY(), 0, 0, 0, 1);
        return matrix;
    }
    static createRotation(scalar) {
        var matrix = new Matrix(Math.cos(scalar), -Math.sin(scalar), 0, Math.sin(scalar), Math.cos(scalar), 0, 0, 0, 1);
        return matrix;
    }
			  multiplyVector(pVector) {
    var X,Y,Z, Vec1,Vec2,Vec3,NewX,NewY,NewZ,ThirdVec;
    X = pVector.getX();
    Y = pVector.getY();
    Z = pVector.getZ();
    Vec1 = this.getVector1();
    Vec2 = this.getVector2();
    Vec3 = this.getVector3();
    NewX = (Vec1.getX() * X) + (Vec1.getY() * Y) + (Vec1.getZ() * Z);
    NewY = (Vec2.getX() * X) + (Vec2.getY() * Y) + (Vec2.getZ() * Z);
    NewZ = (Vec3.getX() * X) + (Vec3.getY() * Y) + (Vec3.getZ() * Z);
    ThirdVec = new Vector(NewX,NewY,NewZ);
    return ThirdVec;
    }
	 multiply(pMatrix){
    var VecX, VecY, VecZ, Vec1, Vec2, Vec3, X1, Y1, Z1, X2, Y2, Z2, X3, Y3, Z3;
    VecX = pMatrix.getVector1();
    VecY = pMatrix.getVector2();
    VecZ = pMatrix.getVector3();
    Vec1 = this.getVector1();
    Vec2 = this.getVector2();
    Vec3 = this.getVector3();
    X1 =(Vec1.getX()*VecX.getX())+(Vec1.getY()*VecY.getX()) + (Vec1.getZ()*VecZ.getX());
    Y1 =(Vec1.getX()*VecX.getY())+(Vec1.getY()*VecY.getY()) + (Vec1.getZ()*VecZ.getY());
    Z1 =(Vec1.getX()*VecX.getZ())+(Vec1.getY()*VecY.getZ()) + (Vec1.getZ()*VecZ.getZ());
    X2 =(Vec2.getX()*VecX.getX())+(Vec2.getY()*VecY.getX()) + (Vec2.getZ()*VecZ.getX());
    Y2 =(Vec2.getX()*VecX.getY())+(Vec2.getY()*VecY.getY()) + (Vec2.getZ()*VecZ.getY());
    Z2 =(Vec2.getX()*VecX.getZ())+(Vec2.getY()*VecY.getZ()) + (Vec2.getZ()*VecZ.getZ());
    X3 =(Vec3.getX()*VecX.getX())+(Vec3.getY()*VecY.getX()) + (Vec3.getZ()*VecZ.getX());
    Y3 =(Vec3.getX()*VecX.getY())+(Vec3.getY()*VecY.getY()) + (Vec3.getZ()*VecZ.getY());
    Z3 =(Vec3.getX()*VecX.getZ())+(Vec3.getY()*VecY.getZ()) + (Vec3.getZ()*VecZ.getZ());
    var matrix = new Matrix(X1, Y1, Z1, X2, Y2, Z2, X3, Y3, Z3);
    return matrix;
              }
     setTransform(pContext) {
         pContext.setTransform(this.getElement(0, 0), this.getElement(1, 0), this.getElement(0, 1),
             this.getElement(1, 1), this.getElement(0, 2), this.getElement(1, 2)); 
     }
     transform(pContext) {
         pContext.transform(this.getElement(0, 0), this.getElement(1, 0), this.getElement(0, 1),
             this.getElement(1, 1), this.getElement(0, 2), this.getElement(1, 2));
     }
}