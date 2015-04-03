
//this object mimics the registers in a system

var Register = function( regList ) {
    this.reg = {};
    for (x in regList)
        this.reg.x = 0;
}

Register.prototype.varifyReg = function( register ) {
    if( register in this.reg )
	return;
    else
	this.errorHandler( "INVALID_REGISTER" )
}

Register.prototype.insert = function( register, value ) {
    if( this.varifyReg( register ) )
        this._reg_[ register ] = value;
}

Register.prototype.increment = function( register, value ) {
    if( this.varifyReg( register ) )
        this._reg_[ register ] += value;
}

Register.prototype.clearAll = function() {
    for (x in reg)
        this.reg.x = 0;
}

Register.prototype.clear = function( register ) {
    if( this.varifyLoc( register ) )
        this._memory_[register] = 0;
}


Register.prototype.errorHandler = function( errMsg ) {
    console.log( errMsg );
}
