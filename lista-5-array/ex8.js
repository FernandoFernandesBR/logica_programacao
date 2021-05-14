var rl = require("readline-sync");


var header = rl.question( "Qual o cabecalho? " )

var data = rl.question( "Qual o dado? " )


var cabecalho = header.split(";")

var dado = data.split(";")

console.log(cabecalho)
console.log(dado)

if (cabecalho.length == dado.length) {

    for(var i = 0; i < cabecalho.length; i++){

        console.log(cabecalho[i] + ": " + dado[i])
        
    }

} else {

    console.log( "Os dados estao errados, tente novamente." )

}







