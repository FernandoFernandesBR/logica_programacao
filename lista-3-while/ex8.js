var rl = require("readline-sync")


while (true) {
    console.clear()
    var p1 = rl.question( " \nQual o nome do primeiro jogador? \n" )
    p1 = p1.toUpperCase()//TRATAMENTO DE ERRO PARA USO DE MAIUSCULAS 

    console.log( "\n" + p1 + "\n Escolha uma jogada \n" )
    var jogada1 = rl.question( "Pedra \nPapel \nTesoura\n" , {hideEchoBack: true} )
    jogada1 = jogada1.toUpperCase()
    console.clear()

    //inicia segunda jogada

    var p2 = rl.question( " \nQual o nome do segundo jogador? \n" )
    p2 = p2.toUpperCase()//TRATAMENTO DE ERRO PARA USO DE MAIUSCULAS
    
    console.log( "\n" + p2 + "\n Escolha uma jogada \n" )
    var jogada2 = rl.question( "Pedra \nPapel \nTesoura\n" , {hideEchoBack: true})
    jogada2 = jogada2.toUpperCase()
    console.clear()

    //imprimindo os resultados

    if (jogada1 == jogada2) {    //PRIMEIRO TESTAR A CONDIÇAO DE EMPATE
        console.log( " NINGUEM VENCEU" )
    
    } else if( //ELIMINAR TODAS AS POSSIBILIDADES DE P1 GANHAR 
                (jogada1 == "PEDRA"   && jogada2 == "TESOURA") || 
                (jogada1 == "TESOURA" && jogada2 == "PAPEL"  ) || 
                (jogada1 == "PAPEL"   && jogada2 == "PEDRA"  ) 
             ) { 

        console.log( p1 + " VENCEU" )

    } else { //SE P1 NAO GANHOU ENTAO P2 GANHOU
        console.log( p2 + " VENCEU" )
    }
    
    rl.question("\nPressione enter para prosseguir..." )
}