var rl = require("readline-sync")


var saldo = 0

while (true) {
    console.clear()
    console.log ( " \n\n (A) Consultar saldo \n (B) Saque \n (C) Deposito \n (D) Sair \n " )

    var opcao = rl.question(" -> ")
    opcao = opcao.toUpperCase () //TRATAMENTO DE ERRO PARA USO DE MAIUSCULAS 
    console.clear()

    if (opcao == "A") {
        console.log ( " O saldo eh R$ " + saldo.toFixed(2) )
        rl.question("Pressione enter para prosseguir..." )

    } else if (opcao == "B") {
        var saque = rl.questionFloat( "Qual o valor do saque?\n " )

        if ( saldo >= saque ) {
            saldo -= saque
            console.log ( "O saldo atualizado eh R$ " + saldo.toFixed(2) ) 
            rl.question("Pressione enter para prosseguir..." )

        } else {
            console.log( " Saldo insuficiente. R$ " + saldo.toFixed(2) )
            rl.question("Pressione enter para prosseguir..." )
        }

    } else if (opcao == "C") {
        var deposito = rl.questionFloat( " Qual o valor do deposito?\n " ) 
        // saldo = saldo + deposito
        saldo += deposito
        console.log ( "O saldo atualizado eh R$ "  + saldo.toFixed(2) ) 
        rl.question("Pressione enter para prosseguir..." )
        
    } else if (opcao == "D") {
        console.log ( "Voce acabou" )

        break

    } else {
        console.log( "Opcao invalida, digite novamente" )
        
    }

}