var rl = require("readline-sync");

  

function descobreDias(ano_parm) {

    var data = new Date().getFullYear(); 

    var idade = data - ano_parm
   
    var dias = idade * 365

    console.log( "voce tem " + idade + " anos e ja viveu " + dias + " dias")   
    

}


var ano = rl.question( "Em qual ano voce nasceu? " )

descobreDias(ano)

