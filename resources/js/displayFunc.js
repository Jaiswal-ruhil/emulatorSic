

var i=0,j=0,k=0,ram={'500':20,'1000':38,'1080':398,'1700':38,'1004':38,'9000':38};
reg={'501':201,'1001':381,'1081':3981,'1701':381,'1007':387,'9001':389};
sym={'503':203,'1003':383,'1083':3983,'1703':383,'1004':38,'9000':38};

keys=[];

//keys=Object.keys(ram);
//arr{}=console.log(obj.key());
function rams() {
    //  alert( "Handler for .click() called." );
    //for (X in obj){
    keys=Object.keys(ram);
    if(i<keys.length){
	$( "#ram" ).append( document.createTextNode(i+" "+ram[keys[i]])).append($("<br>"));
	i=i+1;
    }
}

function registers(){
    //  alert( "Handler for .click() called." );
    //for (X in obj){
    keys=Object.keys(reg);
    if(j<keys.length){
	$( "#reg" ).append( document.createTextNode(j+" "+reg[keys[j]])).append($("<br>"));
	j=j+1;
    }
}

function sym_tab(){
    //  alert( "Handler for .click() called." );
    //for (X in obj){
    keys=Object.keys(sym);
    if(k<keys.length){
	$( "#sym" ).append( document.createTextNode(k+" "+sym[keys[k]])).append($("<br>"));
	k=k+1;
    }
}
