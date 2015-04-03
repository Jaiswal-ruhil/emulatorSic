
codeString = ""
loader =new  Loader()
processor =new Processor()
ram =new PhyMem( 2000 )
register =new Register()
codeObjGen =new CodeObjGenerator()

String.prototype.hex2bin = function () {
  var i = 0, l = this.length - 1, bytes = []
  for (i; i < l; i += 2)
    bytes.push(parseInt(this.substr(i, 2), 16))
  return String.fromCharCode.apply(String, bytes)   
}


