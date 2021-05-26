var rl = require("readline-sync");



function tabuada(params) {

    for( var i = 1; i <= 10; i++ ){
    
        console.log( params + " x " + i + " = " + (params * i) )
    }
    
}


var entrada = rl.question( "Digite um numero para tabuada: " )

tabuada(entrada)






