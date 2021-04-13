var passo = 1
var resultado = 0

while ( passo <= 1000 ) {

    console.log ( passo )

    var mult3 = passo % 3
    var mult5 = passo % 5

    var soma = 0
    if (mult3 == 0 && mult5 == 0) {

        soma = resultado + passo
        resultado = soma 

        console.log ( "a soma " + (soma) )
    }

    passo++
        
}





    







