const chalk = require('chalk');
const log = console.log;




var rl = require("readline-sync");


var word = rl.question( "Digite uma frase: " )
var cifra = 3
var saida = ""

// 97 a 122

for(var i = 0; i < word.length; i++) {

    var letra = word.charCodeAt(i) + cifra 
    var opcao = word.charCodeAt(i)

    if(opcao >= 97 && opcao <= 122){ //range de letras minusculas

        if(letra > 122){
            var dif = letra - 122
            var destino = 96 + dif

        } else {
            var destino = letra 
        }

    } else if(opcao >= 65 && opcao <= 90){ //range de letras maisculas 

        if(letra > 90){
            var dif = letra - 90
            var destino = 64 + dif

        } else {
            var destino = letra
        }

    } else if(opcao >= 48 && opcao <= 57){ //range de numeros

        if(letra > 57){
            var dif = letra - 57
            var destino = 47 + dif

        } else {
            var destino = letra
        }
        
    }else {
        var destino = opcao //mantem o caracteres diferentes de letras e numeros
    }
    
    saida = saida + String.fromCharCode(destino)
}

console.log(saida)

log(chalk.whiteBright.bgBlackBright.bold(saida));