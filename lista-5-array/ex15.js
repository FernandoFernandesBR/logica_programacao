var rl = require("readline-sync");


var word = rl.question( "Digite uma frase: " )

var m1 = word.replace( /a|e|i|o|u/gi, "" )


console.log( m1 )

