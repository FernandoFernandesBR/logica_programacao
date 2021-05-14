var rl = require("readline-sync");


var player_1 = rl.question( "Qual o nome do 1o jogador? " )
player_1 = player_1.toUpperCase()
var numeros_1 = []

for(var i = 1; i <= 5; i++){
      
    var numeros = rl.questionInt( player_1 + " Por favor, Informe 5 numeros de 1 a 10 \nDigite o " + i + "o numero " )
    console.clear()

    numeros_1.push(numeros)
}

var player_2 = rl.question( "Qual o nome do 2o jogador? " )
player_2 = player_2.toUpperCase()
var numeros_2 = []

for(var i = 1; i <= 5; i++){
      
    var numeros = rl.questionInt( player_2 + " Por favor, Informe 5 numeros de 1 a 10 \nDigite o " + i + "o numero " )
    console.clear()

    numeros_2.push(numeros)
}

// console.log("numeros_1: " + numeros_1)
// console.log("numeros_2: " + numeros_2)

var diferentes = []
for(var i = 0; i < numeros_1.length; i++ ){

    var numero_1 = numeros_1[i]
    // console.log(numero_1)
    var count = 0 
    for( var j = 0; j < numeros_2.length; j++ ) {

         var numero_2 =  numeros_2[j]
        //  console.log(" " + numero_2)

             if(numero_2 != numero_1){
                count++
                }
        }
                // console.log("count: " + count )

                if(count == 5){
                diferentes.push(numero_1)
             }
}

console.log( "O jogador " + player_1 + " digitou os seguintes numeros diferentes do jogador " + player_2 + ": " + diferentes )