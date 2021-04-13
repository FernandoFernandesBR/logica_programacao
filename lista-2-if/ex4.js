var rl = require("readline-sync")



var sal = rl.questionFloat( "Qual o seu salario  " )
var emp = rl.questionFloat( "Qual o valor do emprestimo  " )
var pre = rl.questionInt( "Quantas prestacoes  " )

var parcelamento = (emp / pre)
var percent_30 = sal * 0.3

console.log( "O valor de cada parcela e R$ " + parcelamento)
console.log( "30% do salario e R$" + percent_30 )


if (parcelamento <= percent_30 ) {
    console.log( "Voce pode pegar o emprestimo" )

} else {
   console.log( "Voce nao pode pegar emprestimo" )

}    