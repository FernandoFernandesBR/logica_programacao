var rl = require ("readline-sync")

var entrada = rl.questionInt("Digite um numero  ")
console.log ("O numero eh " + entrada)

var divisao = entrada/2

var resto = entrada % 2

//console.log ("O valor da divisao eh: " + divisao)

//console.log ("O valor do resto eh: "+ resto)

if  (resto == 0){
    console.log ("O numero eh par")
}
else {
    console.log ("O numero eh impar")
}

