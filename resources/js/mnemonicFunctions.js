var accumulator = register.A, indexRegister = register.X, linkage.register.L, programCounter = register.PC, statusWord = register.SW;

function changeAccumulatorRegister(accumulator) {
  $("#accumulator").text(accumulator);
};
function changeStatusWord(statusWord) {
  $("#ststusWord").text(statusWord);
};
function changeLinkage(linkage) {
  $("#linkage").text(linkage);
};
function changeProgramCounter(programCounter) {
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
  changeProgramCounter(programCounter);
}

//sets next instruction to be executed to the lable passed by the memory if cc has =
function jeq(memory){
  if(statusWord.CC===1)//1 means =
  programCounter=memory;
  changeProgramCounter(programCounter);
}

//sets next instruction to be executed to the lable passed by the memory if c has >
function jgt(memory){
  if(statusWord.CC==3)//3 means >
  programCounter=memory;
  changeProgramCounter(programCounter);
}

//sets next instruction to be executed to the lable passed by the memory if c has <
function jlt(memory){
  if(statusWord.CC==2)//2 means <
  programCounter=memory;
  changeProgramCounter(programCounter);
}

//JSUB MNEMONIC
function jsub(memory){
  linkage=programCounter;
  programCounter=memory;
  changeProgramCounter(programCounter);
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
