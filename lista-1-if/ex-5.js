var rl = require("readline-sync")



var n_1 = rl.questionInt("Digite o primeiro numero  ")
var n_2 = rl.questionInt("Digite o segundo numero  ")
var n_3 = rl.questionInt("Digite o terceiro numero  ")


var primeiro = 0
var segundo  = 0
var terceiro = 0

if ( n_1 < n_2  && n_1 < n_3){
    primeiro = n_1

} else if (n_2 < n_1 && n_2 < n_3 ) {
    primeiro = n_2

} else if (n_3 < n_2 && n_3 < n_1 ) {
    primeiro = n_3
}

console.log(' O primeiro numero e  ' + primeiro )


if ( ( n_1 > n_2 && n_1 < n_3 ) || ( n_1 < n_2 && n_1 > n_3 ) )  {
    segundo = n_1

} else if ( ( n_2 > n_3 && n_2 < n_1) || ( n_2 < n_3 && n_2 > n_3 ) ) {
    segundo = n_2

} else if ( ( n_3 > n_1 && n_3 < n_2) || ( n_3 < n_1 && n_3 > n_2 ) ) {
    segundo = n_3

} 

console.log(' O segundo numero e  ' + segundo )




if ( n_1 > n_2 && n_1 > n_3) {
    terceiro = n_1


} else if ( n_2 > n_3 && n_2 > n_1 ) {
    terceiro = n_2
 
} else if ( n_3 > n_2 && n_3 > n_1 ) {
    terceiro = n_3

}

console.log(' O terceiro numero e  ' + terceiro )



