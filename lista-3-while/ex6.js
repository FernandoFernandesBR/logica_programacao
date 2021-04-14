var rl = require("readline-sync")
var id_counter = 0

while (true) {
    

    var nome = rl.question("Digite o seu nome  ") 


    if (nome.toUpperCase() == "FINAL" ) { //TRATAMENTO DE ERRO USANDO APENAS MAISCULO
        console.log ( "O programa acabou " )

        break
    }

    var idade = rl.questionInt("Digite a sua idade  ") 

    
    console.log ( " O "  + nome    +   " tem "  + idade  +    " anos" )

    id_counter++

}


console.log( " Foram cadastradas " + id_counter + " pessoas")