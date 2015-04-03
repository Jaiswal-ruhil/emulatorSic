

//future use linking or non linking...
var CodeObjGenerator = function(self){
    this.header = {};
    this.text = [];
    this.end = 0;
    this.codeObj = {};
}

CodeObjGenerator.prototype.getObject = function( codeString ) {
    var records = codeString.split("\n");
    var count = 0;
    //assuming the code is correct.
    for( x in records )
	rec = x.split('^');
    if( rec[0] == "H" ){
	this.header.name = rec[1];
	this.header.stAdd = rec[2];
	this.header.len = rec[3];
    }
// assuming that the T rec is only the opcode
    else if( rec[0] == "T" ) {
	var textRecLen = rec.length();
        for( i = 0; i < textRecLen; i += 1 ) {
	    this.text[count] = rec[i];
	    count += 1;
	}
    }
    else if( rec[0] == "E" ) {
	end = rec[1];
    }
    this.codeObj = { 'H': this.header, 'T': this.text, 'E': this.end };
}
