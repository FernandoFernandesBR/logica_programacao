var inicio = 1
var fim = 50 

while (inicio <= 50) {

    // //descobre se e primo
    var i = 2
    var contador = 0
    while ( i <= inicio ) {
     
        var resto_num = inicio % i

        if ( resto_num == 0 ){
            contador++
        }
     
        i++ 
    }

    var complemento = ""
    if ( contador == 1 ){
        complemento = " PRIMO"

    }




    //descobre se e impar ou par
    var resto = inicio % 2

    if (resto == 0 ){
        console.log( inicio + " PAR" + complemento )

    } else {
        console.log( inicio + " IMPAR" + complemento )
    }

    inicio++
}


