var rl = require ("readline-sync")

var ano_de_nascimento = rl.question ("Qual ano de nascimento  ")

var ano_atual = 2021

var idade = ano_atual - ano_de_nascimento
//console.log ("A idade eh: " + idade)


if (idade <= 16) { 
    console.log("Voce nao pode votar porque eh menor de idade")
    
} else if(idade == 17) {
    console.log("Voce pode votar, mas nao e obrigado a votar")

}
else{
    console.log("Voce e obrigado a votar")
}