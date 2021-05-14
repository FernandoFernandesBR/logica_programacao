var rl = require("readline-sync");


var word = rl.question( "Digite uma palavra: " )

if ( (word.indexOf( "a" ) != -1) ||
     (word.indexOf( "e" ) != -1) ||
     (word.indexOf( "o" ) != -1) ||
     (word.indexOf( "u" ) != -1) ||
     (word.indexOf( "i" ) != -1) ) {

     console.log( "A palavra contem vogais" )
    
} else {
    console.log( "A palavra nao contem vogais" )
}