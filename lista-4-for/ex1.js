var rl = require("readline-sync")


// abelha - 6
// a [0]
// b [1]
// e [2]
// l [3]
// h [4]
// a [5]


var word = rl.question( " Digite uma palavra " )

var resultado = ""
  
for ( i = 0; i < word.length; i++ ) {

    var letra = word[i] //separa a palavra em letras em cada passo

    if (letra == "a") { //enccontra o "a" na palavra

       resultado = resultado + "A" //transforma o a em maisculo

       
    
    } else {
        resultado = resultado + letra //imprime as demais letras quando nao e a 

    }
    
}
console.log( resultado )
