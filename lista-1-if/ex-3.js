var rl = require("readline-sync")



var senha = rl.question("Digita sua senha  ")



if (senha == 1234){
    console.log ("Acesso Permitido")
}
else{
    console.log ("Acesso Negado")
}

