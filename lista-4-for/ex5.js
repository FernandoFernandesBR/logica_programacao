var rl = require("readline-sync")


for (; 1 ; ) { // 1 representa "true" e 0 representa "false"
    
    var opcao = rl.questionInt( "1 para executar\n0 para sair\n" )
    console.clear()
    
    if(opcao) {

        var numero = rl.questionInt( "Qual o numero para fatorial?  " )
        var resultado = 1

        for ( var i = numero; i > 0; i-- ){
        console.log( "resultado: " + resultado + " i: " + i )
        resultado *= i;
        
        }
        console.log(resultado)
        

    }else {

        break
    }
    
    rl.question("Pressione enter para prosseguir... \n" )
    console.clear()
    

}

