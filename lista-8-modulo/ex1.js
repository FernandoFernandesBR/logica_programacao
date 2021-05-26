 var median = require("median")
 var rs = require("readline-sync")


 var notas = []


 console.log("Digite as notas ")

 for ( var i = 0; i < 4; i++ ){

     var nota = rs.questionInt( "> " )

     notas[i] = nota
    }

    var mediaCalculada = median(notas)

    console.log("A media final e: " + mediaCalculada )