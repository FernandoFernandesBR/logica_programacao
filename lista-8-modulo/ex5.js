var rs = require("readline-sync")
var ageCalculator = require('age-calculator');
let {AgeFromDateString, AgeFromDate} = require('age-calculator');

const chalk = require('chalk');
const log = console.log;




var idade = rs.question( "Qual a sua data de nascimento? " )


  let ageFromString = new AgeFromDateString(idade).age;
  // console.log("A sua idade e: ", ageFromString, " anos.");

  log(chalk.whiteBright.bgBlackBright.bold("A sua idade e: ", ageFromString, " anos."));