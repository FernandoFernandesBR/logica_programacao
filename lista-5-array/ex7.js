var rl = require("readline-sync");


var word = rl.question( "Digite uma palavra: " )
word = word.toLowerCase()

var vogal = 0

var consoante = 0
  
for ( i = 0; i < word.length; i++ ) {

    var letra = word[i] 

    if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u" ) { 


        vogal++  
    
    } else { 

        consoante++
   
    }
    
}
console.log( "Essa palavra tem " + word.length + " letras, sendo " + vogal + " vogais e " + consoante + " consoantes." )
