var rl = require("readline-sync")



var n_1 = rl.questionInt("Digite um numero  ")


if (n_1 < 0) {
    console.log( " O resultado e  " +(3 * n_1) )

    
} else if ( n_1 > 0) {
       console.log( " O resultado e   " +(2 * n_1) )

} else {
    console.log( " O numero e zero" )
}