var rl = require("readline-sync")



var n_1 = rl.questionInt("Digite a primeira nota  ")
var n_2 = rl.questionInt("Digite a segunda nota  ")
var n_3 = rl.questionInt("Digite a terceira nota  ")

var media = ( n_1 + n_2 + n_3 ) / 3


if ( media  >= 7 ){
    console.log ( "O aluno esta aprovado" )

} else {
    console.log ( "O aluno foi reprovado" )
}