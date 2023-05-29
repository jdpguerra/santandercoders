let pessoa = {
    nome: 'Jose',
    idade: 21,

}

console.log(pessoa)

console.log(pessoa.nome)
console.log(pessoa['nome']) //segundo metodo
console.log(pessoa.idade)


pessoa.altura = 1.32

console.log(pessoa)

//delete pessoa.altura

for(let chave in pessoa){
    console.log(chave)
}