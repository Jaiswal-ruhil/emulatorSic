
//this object mimics the ram in a system

var PhyMem = function( size ) {
    this.size = size;
    this._memory_ = [];
}

PhyMem.prototype.insert = function( loc, value ) {
    if( this.varifyLoc( loc ) )
        this._memory_[loc] = value;
}

PhyMem.prototype.clearAll = function() {
    this._memory_ = [];
}

PhyMem.prototype.clear = function( loc ) {
    if( this.varifyLoc( loc ) )
        this._memory_[loc] = 0;
}

PhyMem.prototype.varifyLoc = function( loc ) {
    if( loc > this.size || loc < 0 )
	this.errorHandler( "INVALID_PHYSICAL_LOCATION" )
}

PhyMem.prototype.errorHandler= function( errMsg ) {
    console.log( errMsg )
}
