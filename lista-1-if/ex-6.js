var rl = require("readline-sync")


var altura = rl.questionFloat("Qual sua altura  ")
var sexo = rl.questionInt("Qual seu sexo \n Digite: \n 1-feminino \n 2-masculino \n  ")



if (sexo == 1 ) {
    console.log( " o peso recomendado e  " + ( ( 62.1 * altura ) - 44.7) )

} else if ( sexo == 2 ) {
    console.log( " o peso recomendado e  " + ( ( 72.7 * altura ) - 58 ) )

} else {
    console.log( " Digite um sexo valido ")

}









// media = ( 62.1 * altura ) - 44.7
// media = ( 72.7 * altura ) - 58
