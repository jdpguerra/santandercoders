
const dados = ['jose','texto', 'carro']
console.log(dados)

console.log('segundo elemento', dados[1]);

console.log('Tamanho array', dados.length);

for (let i =0; i<dados.length; i++) {
    console.log(dados[i])

} 

console.clear();
for (let elemento of dados) {

console.log(elemento);
}

console.clear();

for (let indice in dados){
    console.log(indice,dados[indice])
}