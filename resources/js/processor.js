
var Processor = function() {
    var instObj = {};
    splitInst = function() {
  	}
}

Processor.prototype.execute = function() {
    var start = register.PC;
    instAdd = start;
    console.log( start, "    ", ram._memory_[instAdd] )
    do{
      register.PC = perform( ram._memory_[instAdd] )
    }while( instAdd != start )
    var instObj = inst.instObj
    var loc = instObj.add;
    if( instObj.flag == 1 )
  	loc = loc + register.B
    instSet[instObj.opcode]( loc )
    register.increment( 'PC', 1 );
}

function perform(  operation ) {
    var opcode = operation.toString();
    var xflag = operation.toString();
    var address = operation.toString();    
    
}


