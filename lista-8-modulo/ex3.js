var isOdd = require('is-odd')
var rs = require("readline-sync")


var num = rs.questionInt( "Digite um numero: " )


console.log(isOdd(num)); 

if (isOdd(num) ) { 

    console.log( "O numero e impar" )
    
} else{
        
    console.log( "O numero e par" )
}

