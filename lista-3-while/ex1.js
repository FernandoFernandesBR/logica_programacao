var rl = require("readline-sync")


var n1 = rl.questionInt("Digite o primeiro numero  ")
var n2 = rl.questionInt("Digite o segundo numero   ")

var inicio = 0
var fim = 0

//descobrindo n1
if( n1 > n2 ){
    fim = n1

} else { 
    inicio = n1

} 

//descobrindo n2
if( n2 > n1 ){
    fim = n2

} else {
    inicio = n2

}


//laço de repetiçao
while( inicio <= fim ){

    var resto_7 = inicio % 7
    var resto_5 = inicio % 5


    if (resto_5 == 0 && resto_7 == 0 ) {
        console.log( inicio + " Ping Pong" )

    } else if (resto_5 == 0 ) {
        console.log( inicio + " Pong" )   

    } else if (resto_7 == 0 ) {
        console.log( inicio + " Ping" )

    } else { 
        console.log( inicio )
    }

    // inicio = inicio + 1
    inicio++

}
