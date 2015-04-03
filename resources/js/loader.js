
// ram global
// register global -- to load to pogram counter
/*
    Head Record : H^Program-Name[2-7]^Start-Address^Length-Of-Object-Program
    Text Record : T^MachineInstruction^MachineInstruction^.....
    End Record  : E^Address-of-First-Executable
*/
// codeObj = { 'H': {'name': "", 'stAdd': 0x0000, 'len': 0x0000 }, 'T': [0x000,0x000...], 'E': 0x000};

var Loader = function(self) {
}

Loader.prototype.load = function( codeString ) {
    codeObjGen.getObject( codeString )
    var phyLoc = codeObjGen.codeObj.H.stAdd
    for(var i = 0; i < codeObjGen.codeObj.H.len; i += 1 )
        ram.insert( phyLoc + i, codeObjGen.codeObj.T['i'] )
    ram.insert( phyLoc + i, codeObjGen.codeObj.H.stAdd )
    register.insert( 'PC', codeObjGen.codeObj.H.stAdd )
}
