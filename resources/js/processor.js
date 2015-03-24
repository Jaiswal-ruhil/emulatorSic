
function Processor = function() {
    var machine = self;
    var instObj = {};
    splitInst = function() {
	var instObj = { 'opcode': 0, 'flag': 0, 'add': 0 };
	this.instObj['opcode'] = parseInt( self / 0x10000 );
	this.instObj['flag'] = parseInt( ( self | 0x7f00 ) / 0x7000 );
	this.instObj['add'] = parseInt( self | 0x7fff )
    }
}

Processor.prototype.execute() {
    var start = machine.register.PC;
    instAdd = start;
    do{
	instAdd  =
    }while( instAdd != start )
    var instObj = inst.instObj
    var loc = instObj.add;
    if( instObj.flag == 1 )
	loc = loc + machine.register.B
    instSet[instObj.opcode]( loc )
    machine.register.increment( 'PC', 1 );
}

