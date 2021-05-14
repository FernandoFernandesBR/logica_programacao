var rl = require("readline-sync");


var word = rl.question( "Digite um nome: " )

// var letra = word[2]    
var letra = word.charAt(2) 


console.log( "Esse nome tem " + word.length + " letras e a terceira letra e: " + letra )      