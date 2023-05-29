
const arra1 = [30,32,43,45,54]
let arra2 =[]

console.log(arra1.slice(0, 2))
console.log(arra1.slice(2))

console.log('Antes de adicionar', arra2);

arra2.push(100,300,400,2,4,5,5)
console.log('depois', arra2)

arra2.unshift(0); // inicio
console.log(arra2)

arra2.pop(); // ultimo elemento remover
arra2.shift() // remove primeiro elemento

console.clear();
console.log(arra1)
console.log(arra2)

console.log(arra1.concat(arra2))

let indicedoElemento34 = arra1.indexOf(43);// resultado e -1 e porque não existe o valor
console.log(indicedoElemento34);

console.clear()

console.log(arra1)
console.log(arra1.includes(45)); // procurando info no array



