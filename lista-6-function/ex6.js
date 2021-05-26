var rl = require("readline-sync");


var base = rl.questionInt( "Digite o numero base: " )
var potencia = rl.questionInt( "Digite o numero potencia: " )


var resultado = Math.pow(base, potencia)

console.log(resultado)

