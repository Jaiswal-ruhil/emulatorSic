
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

$.getScript('mnemonicFunctions.js', function()
{
    // script is now loaded and executed.
    // put your dependent JS here.
var lables=[];
var name,mnemonic;

var executeCommand={
  '0000000' : function() {add(name) },
  '0000100' : function() {and(name) },
  '0001000': function() {comp(name) },
  '0001100' : function() {div(name) },
  '0010000'   : function() {j(name) },
  '0010100' : function() {jeq(name) },
  '0011000' : function() {jgt(name) },
  '0011100' : function() {jlt(name) },
  '0100000': function() {jsub(name) },
  '0100100' : function() {lda(name) },
  '0101000': function() {ldch(name) },
  '0101100' : function() {ldl(name) },
  '0110000' : function() {ldx(name) },
  '0110100' : function() {mul(name) },
  '1001000'  : function() {or(name) },
  '1000000'  : function() {rd(name) },
  '1000100': function() {rsub()},
  '0111100' : function() {sta(name) },
/*  '': function() {stch(name) },
  'STL' : function() {stl(name) },
  'STSW': function() {stsw(name) },
  'STX' : function() {stx(name) },
  'SUB' : function() {sub(name) },
  'TD'  : function() {td(name) },
  'TIX' : function() {tix(name) },
  'WD'  : function() {wd(name)}*/
};


var dummydata="LDA number";

function main(data){
  var temp = data.split(" ");
  if(temp.length===3){
    label.push(temp[0]);
    mnemonic=temp[1];
    name=temp[2];
   }
   else{
    mnemonic=temp[0];
    name=temp[1];
   }
   executeCommand[mnemonic].call();
}


