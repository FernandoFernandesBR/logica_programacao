var rl = require("readline-sync")



var temperatura = rl.questionFloat("Qual a temperatura?  ")
var grau = rl.question( "fahrenheit ou celsius?  " )

var celsius = temperatura - ( 32  / 9  )
var fahrenheit = ( temperatura / ( 5 * 9 ) ) + 32 

if (grau == 'celsius' ) {
    console.log( "A temperatura em farenheit e  " + fahrenheit);

} 

if (grau == 'fahrenheit') {
    console.log( "A temperatura em celsius e  " + celsius)
      
}
