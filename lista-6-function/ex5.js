var rl = require("readline-sync");



function descobreMenor(n1_parm, n2_parm) {

    if (n1_parm < n2_parm) {

        console.log( n1_parm + " e menor do que " + n2_parm)
        
    } else {

        console.log( n2_parm + " e menor do que " + n1_parm )
        
    }

    
    
}

var n1 = rl.question( "Digite um numero: " )
var n2 = rl.question( "Digite outro numero: " )

descobreMenor(n1, n2)
