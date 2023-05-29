
const input = require('readline-sync')
const numSorteado =230;

let numero = Number (input.question(' digite seu numero: '))
console.log(numero, typeof numero)

if(numero === numSorteado) {
    console.log("vc ganhou")
} else {
    console.log("Vc perdeu")
}