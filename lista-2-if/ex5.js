var rl = require("readline-sync")



var pergunta = rl.questionFloat( "Qual e a quantidade de KW  " )




    var custo100KW = 1045 / 7
        console.log( "O custo de 100 KW e  "+custo100KW )

    var desconto = 10 / 100 * custo100KW
    var aplicado = custo100KW - desconto
        console.log( "O valor com desconto e  " +aplicado )

    var resposta = ( pergunta / 100 ) * aplicado
        // console.log( "O Valor final e  " +resposta)

    var semdesconto = ( pergunta / 100 ) * custo100KW

if ( ( pergunta / 100) * aplicado ) {
        console.log( "O valor  total com desconto e  " +resposta)

}    

if ( ( pergunta / 100 ) * custo100KW ) {
        console.log( "O valor total sem desconto e  " +semdesconto )
    
}


