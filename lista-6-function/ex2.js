var rl = require("readline-sync");


function descobrePrimo(numero_parm) {
    var i = 2
    var contador = 0
    while ( i <= numero_parm ) {
     
        var resto_num = numero_parm % i

        if ( resto_num == 0 ){
            contador++
        }
     
        i++ 
    }

    var resposta = true
    if ( contador == 1 ){
        resposta = true

    } else { 
        resposta = false
    }
    
    return resposta
}

var entrada = rl.question( "Digite um numero: " )

var retorno = descobrePrimo(entrada)

if (retorno == true) {

    console.log( "O numero e primo" )
    
} else {

    console.log( "O numero nao e primo")
}
