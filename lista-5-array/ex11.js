var rl = require("readline-sync");


var word = rl.question( "Digite uma palavra: " )


if (word.includes("mb") || word.includes("mp")) {

    console.log( "A palavra esta correta" )
    
} else {
    
    console.log( "A palavra esta errada" )
}