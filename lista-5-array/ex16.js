var rl = require("readline-sync");


var word = rl.question( "Digite uma frase: " )

var letra = word.startsWith( "google" )


if (word.startsWith( "google" )) {
     
    console.log( "Palavra valida" )

} else {

    console.log( "Palavra nao valida" )
    
}

