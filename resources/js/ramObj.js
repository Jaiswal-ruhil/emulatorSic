
//this object mimics the ram in a system

function PhyMem = function( size ) {
    this.size = size;
    var _memory_ = [];
}

PhyMem.prototype.insert( loc, value ) {
    if( this.varifyLoc( loc ) )
        this._memory_[loc] = value;
}

PhyMem.prototype.clearAll() {
    this._memory_ = [];
}

PhyMem.prototype.clear( loc ) {
    if( this.varifyLoc( loc ) )
        this._memory_[loc] = 0;
}

phyMem.prototype.varifyLoc( loc ) {
    if( loc > this.size || loc < 0 )
	this.errorHandler( "INVALID_PHYSICAL_LOCATION" )
}

PhyMem.prototype.errorHandler( errMsg ) {
    console.log( errMsg )
}
