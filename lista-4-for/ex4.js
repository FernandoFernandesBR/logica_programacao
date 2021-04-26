var rl = require("readline-sync")



for ( var i = 1; i <= 5; i++ ) {

    var nome = rl.question( "Qual o nome do " + i + "o aluno?  " )
    nome = nome.toUpperCase()
    var n1 = rl.questionFloat( "Qual a primeira nota?  " )
    var n2 = rl.questionFloat( "Qual a segunda nota?  " )
    console.clear()
    
    var peso_nota1 = (n1 * 0.3) 
    var peso_nota2 = (n2 * 0.7) 
    var nota_final = ( peso_nota1 + peso_nota2 ) 

    if (nota_final >= 7) {

        
        console.log( "\n" + nome )
        console.log( "Primeira nota " + n1 )
        console.log( "Segunda nota " + n2 )
        console.log( "Sua media final e " + nota_final.toFixed(2) + " voce foi aprovado \n" )
        
        
    } else {

        console.log( "\n" + nome )
        console.log( "Primeira nota " + n1 )
        console.log( "Segunda nota " + n2 )
        console.log( "Sua media final e " + nota_final.toFixed(2) + " voce foi reprovado \n" )
        
        
    }

    rl.question("Pressione enter para prosseguir... \n" )
    console.clear()
    
}
