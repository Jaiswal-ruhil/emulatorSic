//this object mimics the ram in a system

var Physical_Memory = function( size ) {
    this.size = size;
    this.END = size-1;
    this._memory_ = new Array(size);
}

Physical_Memory.prototype.insert = function( location, value ) {
    if( this.varifyLoc( location ) )
        this._memory_[location] = value & 0xff; //since sach location is just one byte
}

Physical_Memory.prototype.clearAll = function() {
    this.clear( 0, this.END );
}

Physical_Memory.prototype.clear = function( start_location, end_location ) {
    if( this.varifyLoc(start_location) && this.varifyLoc(end_location) )
        for(location=start_location; location<=end_location; location++)
	    this._memory_[location] = 0;
    else
	this.errorHandler("invalid block")
}

Physical_Memory.prototype.varifyLoc = function( location ) {
    if( (location > this.END || location < 0) ) {
	this.errorHandler( "INVALID_PHYSICAL_LOCATION" )
    }
    else
	return true
}

Physical_Memory.prototype.errorHandler= function( errMsg ) {
    console.log( errMsg )
}

Physical_Memory.prototype.fetch = function( location ) {
    if( this.varifyLoc( location ) )
	if( this._memory_[location] === undefined )
	    this._memory_[location] =  Math.floor((Math.random() * 1000)%255);
    return this._memory_[location];
}

//for testing under node js
module.exports = Physical_Memory
