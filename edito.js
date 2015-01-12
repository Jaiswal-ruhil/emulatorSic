$.getScript('mnemonicFunctions.js', function()
{
    // script is now loaded and executed.
    // put your dependent JS here.
var lables=[];
var name,mnemonic;

var executeCommand={
  'ADD' : function() {add(name) },
  'AND' : function() {and(name) },
  'COMP': function() {comp(name) },
  'DIV' : function() {div(name) },
  'J'   : function() {j(name) },
  'JEQ' : function() {jeq(name) },
  'JGT' : function() {jgt(name) },
  'JLT' : function() {jlt(name) },
  'JSUB': function() {jsub(name) },
  'LDA' : function() {lda(name) },
  'LDCH': function() {ldch(name) },
  'LDL' : function() {ldl(name) },
  'LDX' : function() {ldx(name) },
  'MUL' : function() {mul(name) },
  'OR'  : function() {or(name) },
  'RD'  : function() {rd(name) },
  'RSUB': function() {rsub(),
  'STA' : function() {sta(name) },
  'STCH': function() {stch(name) },
  'STL' : function() {stl(name) },
  'STSW': function() {stsw(name) },
  'STX' : function() {stx(name) },
  'SUB' : function() {sub(name) },
  'TD'  : function() {td(name) },
  'TIX' : function() {tix(name) },
  'WD'  : function() {wd(name)
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

main(dummydata);
});
