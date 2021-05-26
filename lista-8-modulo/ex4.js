var rs = require("readline-sync")
var isPrime = require('prime-number')


var num = rs.questionInt( "Digite um numero: " )


// console.log(isPrime(num))

if ( isPrime(num) ) {

    console.log( "O numero e primo" )
    
} else {

    console.log( "O numero nao e primo" )
}

