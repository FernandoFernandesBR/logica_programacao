var rl = require("readline-sync");


var produtos = [];
var precos = []

for( var i = 1; i < 4; i++ ){
    
    var pedido = rl.question( "Qual o " + i +  "o produto? " );
    var valor = rl.questionFloat( "Qual o preco " + i + "o produto? ");
    console.clear();

    produtos.push(pedido);
    precos.push(valor);
}

var soma = 0
for( var i = 0; i < produtos.length; i++ ) {

    var item = produtos[i] 
    var valor = precos[i]
    soma = soma + valor

    console.log( item + " - " + valor )
   
}

console.log ( "O valor total e " + soma )
console.clear();


var pagamento = rl.questionFloat( "Quanto voce tem? " );

var troco = pagamento - soma

console.log( "O seu troco e: " + troco )


