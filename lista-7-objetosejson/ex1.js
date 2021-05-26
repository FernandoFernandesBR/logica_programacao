var rl = require("readline-sync")
 

var meuCarro = new Object()

meuCarro.cor = rl.question("Digite a cor do carro  ")

meuCarro.marca = rl.question("Digite a marca do carro  ")

meuCarro.modelo = rl.question("Digite o modelo do carro  ")


console.log(meuCarro)

