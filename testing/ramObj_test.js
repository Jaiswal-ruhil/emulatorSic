
var ramObj = require("../resources/js/ramObj.js")
var ram = new ramObj( 1024 )

ram.insert(0,10)
ram.insert(100,1111) // modulus is applied over 255 
if ( ram.fetch(0) === 10 ) console.log("test 1 pass")
if ( ram.fetch(100) === ( 1111&0xff ) ) console.log("test 2 pass")
var test_val = ram.fetch(90)
if ( test_val === ram.fetch(90) ) console.log("test 3 pass")
ram.clearAll()
if ( ram.fetch(0) === 0 ) console.log("test 4 pass")
