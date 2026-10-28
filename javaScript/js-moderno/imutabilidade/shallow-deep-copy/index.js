//COPY

const pessoa1 = {
    nome: "André",
    idade: 33,
    endereco: {
        cidade: "Brasília",
        estado: "DF"
    }
}

const pessoa2 = {...pessoa1}

pessoa2.nome = "Carlos"

console.log("Pessoa 1: ", pessoa1.nome)
console.log("Pessoa 2: ", pessoa2.nome)

//SHALLOW COPY
pessoa2.endereco.cidade = "São Paulo"

console.log("Pessoa 1, cidade: ", pessoa1.endereco.cidade)
console.log("Pessoa 2, cidade:", pessoa2.endereco.cidade)



//DEEP COPY - STRUCTUREDCLONE()
console.log("***** Deep copy *****")
const pessoa3 = structuredClone(pessoa1)

pessoa3.endereco.cidade = "Minas Gerais"
console.log("Pessoa 1", pessoa1)
console.log("Pessoa 3", pessoa3)