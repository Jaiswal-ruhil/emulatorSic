var accumulator, indexRegister, linkage, programCounter, statusWord = [ CC: 0];

function changeAccumulatorRegister(accumulator) {
  $("#accumulator").text(accumulator);
};
function changeStatusWord(statusWord) {
  $("#ststusWord").text(statusWord);
};
function changeLinkage(linkage) {
  $("#linkage").text(linkage);
};
function changeProgramCounter(memory) {
  for(i=0 ;i<lines.length;i++) {
    if(lines[i].split(" ")[0] === memeory)
      programCounter=i;
  }
  $("#pogramCounter").text(programCounter);
};
function changeIndexRegister(indexRegister) {
  $("#indexRegister").text(indexRegister);
};

//checks if there occues an over flow in t the 24 bit register
function checkOverflow(value) {
  return value | 335544321
}


//adds the content of the memory and the accumulatorand stores in the acm
function add(memory) {
  accumulator =checkOverflow(accumulator+ memory);
  changeAccumulatorRegister(accumulator);
}

//bitwise and the content of the memory and the accumulatorand stores in the acm
function and(memory) {
  accumulator =accumulator& memory;
  changeAccumulatorRegister(accumulator);
}

//compares the acc with the memory ad sets the sw for it
function comp(memory){
  if(accumulator> memory)
    statusWord.CC = 3;
  else if(accumulator< memory)
    statusWord.CC = 2;
  else(accumulator= memory)
    statusWord.CC = 1;
  changeStatusWord(statusWord);

}

//divides the acc with the memory and stores in the acm
function div(memory) {
  if(memory === 0 )
    accumulator = 0;
  else
    accumulator = accumulator /memory;
  changeAccumulatorRegister(accumulator);
}

//sets next instruction to be executed to the lable passed by the memory
function j(memory){
  programCounter=memory;
  changeProgramCounter(memory);
}

//sets next instruction to be executed to the lable passed by the memory if cc has =
function jeq(memory){
  if(statusWord.CC===1)//1 means =
  programCounter=memory;
  changeProgramCounter(memory);
}

//sets next instruction to be executed to the lable passed by the memory if c has >
function jgt(memory){
  if(statusWord.CC==3)//3 means >
  programCounter=memory;
  changeProgramCounter(memory);
}

//sets next instruction to be executed to the lable passed by the memory if c has <
function jlt(memory){
  if(statusWord.CC==2)//2 means <
  programCounter=memory;
  changeProgramCounter(memory);
}

//JSUB MNEMONIC
function jsub(memory){
  linkage=programCounter;
  programCounter=memory;
  changeProgramCounter(memory);
}

//LDA MNEMONIC
function lda(memory){
  accumulator=memory;
  changeAccumulatorRegister(accumulator);
}

//LDCH MNEMONIC
function ldch(memory){
  accumulator=memory & 511;
  changeAccumulatorRegister(accumulator);
}
  
//MUL MNEUMONIC
function mul(memory){
	accumulator=accumulator*memory
  changeAccumulatorRegister(accumulator);
}

//OR MNEUMONIC
function or(memory){
	accumulator=accumulator|memory
  changeAccumulatorRegister(accumulator);
}	

//STA MNEUMONIC
function sta(memory){
  memory=accumulator;
  changeMemory(memory);
}

//STCH MNEUMONIC
function stch(memory){
  memory=accumulator;
  changeMemory(memory);
}

//STL MNEUMONIC
function stl(memory){
  memory=linkage
  changeMemory(memory);
}

//STSW MNEUMONICS
function stsw(memory){
  memory=status word
  changeMemory(memory);
}  

//STX MNEUMONIC
function stx(memory){
  memory=indexRegister
  changeMemory(memory);
} 

//SUB MNEUMONIC
function sub(memory){
  accumulator=accumulator-memory
  changeAccumulatorRegister(accumulator);
}   

var lines=[]; 
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
  'WD'  : function() {wd(name)}
};


function execute(){
  line= ace.edit(editor).getValue().split("\n");
  var len = line.length;
  programCounter=0;
  while(line[programCounter] !== "END") {
    var temp=line[programCounter].split(" ");
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
    programCounter=programCounter + 1;
  }
}


