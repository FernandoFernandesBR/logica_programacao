var rl = require("readline-sync")




var inicio = rl.questionInt( " Qual o numero inicial? " )

var fim = rl.questionInt( " Qual o numero final? " )

for ( i = inicio; i <= fim; i++ ) {
    console.log( i )

}