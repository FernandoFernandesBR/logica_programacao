var rs = require("readline-sync")
const FasamImc = require('fasam-imc-calc');

const chalk = require('chalk');
const log = console.log;



var peso = rs.questionFloat( "Qual o seu peso? " )
var altura = rs.questionFloat( "Qual a sua altura? " )

 
var imc = new FasamImc(peso, altura)

var resposta = imc.calc()

// console.log("O seu IMC e: ", resposta, ", o mais saudavel e estar entre 18,5 e 24,9.")

log(chalk.whiteBright.bgBlackBright.bold("O seu IMC e:", resposta,", o mais saudavel e estar entre 18,5 e 24,9."));


