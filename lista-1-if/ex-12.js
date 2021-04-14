var rl = require("readline-sync")



var n_1 = rl.questionInt("Digite o primeiro numero  ")
var n_2 = rl.questionInt("Digite o segundo numero  ")


var resto = n_1 % n_2



if  (resto == 0){
    console.log (" O numero " + n_1 + " eh divisivel por " + n_2)

} else {
    console.log( " o numero " + n_1 + " nao e divisivel por  " + n_2 )
    
}