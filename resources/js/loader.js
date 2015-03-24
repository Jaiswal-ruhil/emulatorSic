
// ram global
// register global -- to load to pogram counter
/*
    Head Record : H^Program-Name[2-7]^Start-Address^Length-Of-Object-Program
    Text Record : T^MachineInstruction^MachineInstruction^.....
    End Record  : E^Address-of-First-Executable
*/
// codeObj = { 'H': {'name': "", 'stAdd': 0x0000, 'len': 0x0000 }, 'T': [0x000,0x000...], 'E': 0x000};

function Loader = function( ) { }

Loader.prototype.load( codeObj, ram, register ) {
    var phyLoc = codeObj.H.stAdd
    for(var i = 0, i < self.H.len; i += 1 )
        ram.insert( phyLoc + i, codeObj.T['i'] )
    ram.insert( phyLoc + i, 0 | start )
    register.insert( 'PC', codeObj.H.stAdd )
}
