var rl = require("readline-sync")



var moedas = rl.questionInt("Quantas moedas? ")
var valor = rl.questionFloat("Qual o valor do produto")


var m1 = moedas * 1
var m50 = moedas * 0.5
var m25 = moedas * 0.25
var m10 = moedas * 0.10
var m01 = moedas * 0.01

var soma = m1 + m50 + m25 + m10 + m01

if(soma >= valor ) {
    console.log( "Voce pode comprar o produto" )
    console.log( "O seu cofrinho tem R$" + soma )
   
} else {
    console.log( "Voce nao pode comprar o produto" )

}  



