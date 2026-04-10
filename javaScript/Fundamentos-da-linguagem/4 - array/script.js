//Lista de servidores
const servidores = ["Ana", "Bruno", "Carlos"]

console.log(servidores[0])
console.log(servidores[2])

servidores.push("Daniel") //adicionar na ultima posição do array
console.log(servidores)

servidores.pop() //apaga o ultima posição do array
console.log(servidores)

servidores.unshift("Fernanda") //adiciona na primeira posição do array
console.log(servidores)

servidores.shift() //Apaga a primeira posição do array
console.log(servidores)

console.log(servidores.includes("Ana")) //true
console.log(servidores.indexOf("Bruno")) // mostra qual é a posição dentro do array

for (let i = 0; i < servidores.length; i++) {
    console.log(`Servidor: ${servidores[i]}/ Posição: ${i}`)
}

//Array com objetos
const colaboradores = [
    {nome: "André", setor: "TI", ativo: true},
    {nome: "Mateus", setor: "Atendimento", ativo: true},
    {nome: "Samara", setor: "Atendimento", ativo: false},
    {nome: "Thayná", setor: "Atendimento", ativo: false},
    {nome: "Wagner", setor: "Atendimento", ativo: true}
]

for (const colaborador of colaboradores) {
    // console.log(`${colaborador.nome} - ${colaborador.setor}`)
    
    if (colaborador.ativo) {
        console.log(`${colaborador.nome} está ativo`)
    }
}

//buscar um item específico
const produtos = [
    {id: 1, nome: "Mouse", preco: 80},
    {id: 2, nome: "Teclado", preco: 120},
    {id: 3, nome: "Monitor", preco: 900}
]

let produtoEncontrado = null

for (const produto of produtos){
    if(produto.id === 2) {
        produtoEncontrado = produto
        break
    }
}

console.log(produtoEncontrado)