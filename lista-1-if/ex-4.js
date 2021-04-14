var rl = require("readline-sync")



var quantidade = rl.questionInt("Quantas macas?  ")

var valor_final = 0.00



if (quantidade >= 12){
    
    console.log ("Cada maca custa R$0,25")

    valor_final = quantidade * 0.25

} else {

    console.log ("Cada maca custa R$0,30")

    valor_final = quantidade * 0.30
}



console.log ("O preco total e R$ " + valor_final)
