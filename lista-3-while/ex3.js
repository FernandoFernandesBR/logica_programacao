var passo = 1

while (passo <= 5) {

    var i = 1 
    var texto = ""
    var auxiliar = ""
    while ( i <= passo ) {
       
         auxiliar = texto + "*"
         texto = auxiliar
       
        i++
    }

    console.log ( texto )

    passo++
}

