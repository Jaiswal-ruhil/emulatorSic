
//this object mimics the registers in a system

function Registers = function( regList ) {
    this.reg = {};
    for (x in regList)
        this.reg.x = 0;
}

PhyMem.prototype.insert( register, value ) {
    if( this.varifyReg( register ) )
        this._reg_[ register ] = value;
}

PhyMem.prototype.increment( register, value ) {
    if( this.varifyReg( register ) )
        this._reg_[ register ] += value;
}

PhyMem.prototype.clearAll() {
    for (x in reg)
        this.reg.x = 0;
}

PhyMem.prototype.clear( register ) {
    if( this.varifyLoc( register ) )
        this._memory_[register] = 0;
}

phyMem.prototype.varifyLoc( register ) {
    if( register in this.size )
	return;
    else
	this.errorHandler( "INVALID_REGISTER" )
}

PhyMem.prototype.errorHandler( errMsg ) {
    console.log( errMsg );
}
