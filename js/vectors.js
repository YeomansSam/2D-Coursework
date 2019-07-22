class Vector {
    constructor(pX, pY, pZ) {
        this.setX(pX);
        this.setY(pY);
        this.setZ(pZ);

    }
    getX() {
        return this.mX;
    }
    setX(pX) {
        this.mX = pX;
    }
    getY() {
        return this.mY;
    }
    setY(pY) {
        this.mY = pY;
    }
    getZ() {
        return this.mZ;
    }
    setZ(pZ) {
        this.mZ = pZ;

    }
    add(secondvector) {
        var newX = this.getX() + secondvector.getX();
        var newY = this.getY() + secondvector.getY();
        var newZ = this.getZ() + secondvector.getZ();
        return new Vector(newX, newY, newZ);
    }
    subtract(secondvector) {
        var newX = this.getX() - secondvector.getX();
        var newY = this.getY() - secondvector.getY();
        var newZ = this.getZ() - secondvector.getZ();
        return new Vector(newX, newY, newZ);
    }
    multiply(scalar) {
        var newX = this.getX() * scalar;
        var newY = this.getY() * scalar;
        var newZ = this.getZ() * scalar;
        return new Vector(newX, newY, newZ);
    
    }
    divide(scalar) {
        var newX = this.getX() / scalar;
        var newY = this.getY() / scalar;
        var newZ = this.getZ() / scalar;
        return new Vector(newX, newY, newZ);
    }
	 magnitude() {
    var a = this.getX() * this.getX();
    var b = this.getY() * this.getY();
    var c = a + b;
    var d = Math.sqrt(c);
    return d;
    }
    normalise() {
    var a = this.getX() * this.getX();
    var b = this.getY() * this.getY();
    var c = a + b;
    var d = Math.sqrt(c);
    var normX = this.getX() / d;
    var normY = this.getY() / d;
    var normZ = this.getZ() / d;
    return new Vector(normX, normY, normZ);
     }
    limitTo(limit) {
        var mag = this.magnitude();

        if (mag <= limit) {
            return new Vector(this.getX(), this.getY(), this.getZ());
        }
        else {
            var newX = this.getX() / mag * limit;
            var newY = this.getY() / mag * limit;
            var newZ = this.getZ() / mag * limit;
            return new Vector(newX, newY, newZ);
        }
	}
        dotProduct(secondvector){
            var x = this.getX() * secondvector.getX();
            var y = this.getY() * secondvector.getY();
            var z = this.getZ() * secondvector.getZ();
            var w = (x + y + z);
            return w;
        }
        interpolate(secondvector, interpolation){
            var x = this.getX() + secondvector.getX();
            var y = this.getY() + secondvector.getY();
            var z = this.getZ() + secondvector.getZ();
            var p = (x * interpolation)
            var q = (y * interpolation)
            var o = (z * interpolation)
            var w = new Vector(p, q, o);
            return w;
        }
        rotate(rotation){
            var x = this.getX() * Math.cos(rotation) - this.getY() * Math.sin(rotation)
            var y = this.getX() * Math.sin(rotation) + this.getY() * Math.cos(rotation)
            var z = 0
            return new Vector(x, y, z);
        }
        angleBetween(secondvector){
            var mag = this.magnitude();

            var x = secondvector.getX() * secondvector.getX();
            var y = secondvector.getY() * secondvector.getY();
            var v = x + y;
            var mag2 = Math.sqrt(v);


            var a = Math.sqrt((mag * mag) * (mag2 * mag2));
            var dot = this.dotProduct(secondvector);
            var rad = Math.acos(dot / a);
            return rad;
        }
		 
}