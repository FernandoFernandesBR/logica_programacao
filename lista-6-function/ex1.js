var rl = require("readline-sync");

function calculaVolume(raio){

    var resultado = (4/3)*3.14*raio*3  

    console.log(resultado)

}

var entrada = rl.question( "Digite um parametro: " )

calculaVolume(entrada)

calculaVolume(10)




