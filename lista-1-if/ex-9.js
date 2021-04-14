var rl = require("readline-sync")



var entrada = rl.questionInt("Digite um numero  ")


if (entrada >= 100 && entrada <= 200){
    console.log ( "O valor esta entre 100 e 200" )


}else {
    console.log ( " O valor nao esta entre 100 e 200" )

}