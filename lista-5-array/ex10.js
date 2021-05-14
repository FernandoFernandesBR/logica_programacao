var rl = require("readline-sync");


var word = rl.question( "Digite uma palavra: " )


if (word.endsWith("al")) {

    console.log(word)
    
} else {
    
    console.log( "Palavra nao identificada" )
}