const name = "André"
const lastName = "Ximenes"
const acting = true
const balance = 1500.75
const responsability = null

let phone
let age = "33"

const fullName = `${name} ${lastName}`
const bonus = 500
const updatedBalance = balance + bonus


console.log(`Name: ${typeof name}`)
console.log(`Last name: ${typeof lastName}`)
console.log(`Acting: ${typeof acting}`)
console.log(`Balance: ${typeof balance}`)
console.log(`Responsability: ${typeof responsability}`)
console.log(`Phone number: ${typeof phone}`)
console.log(`Age: ${typeof age}`)

//conversão de tipo
age = Number(age)
console.log("⬇️ Conversão de tipos ⬇️")
console.log(`Age ${typeof age}`)

console.log(`Full Name: ${fullName}`)

//Operações
console.log("⬇️ Operações ⬇️")
console.log(`User: ${fullName}`)
console.log(`Age: ${age}`)
console.log(`Update balance: ${updatedBalance}`)

//comparações
console.log("⬇️ Comparações ⬇️")
console.log(`age == "33 : ${age == "33"}`)
console.log(`age === "33 : ${age === "33"}`)

//Operadores Lógicos
console.log("⬇️ Comparações ⬇️")
const acessSystem = acting && age >=18
console.log(`Can you access the system? ${acessSystem}`)

//Operadores Lógicos
// && - Retorna true quando as duas condições são verdadeiras.
// || - Retorna true quando pelo menos uma condição é verdadeira.
// ! - Não lógico. Inverte o valor booleano. !true = false // !false = true


//                              O QUE ESSES EXEMPLOS ENSINAM

// criação de variáveis com const e let
// tipos primitivos
// null e undefined
// typeof
// conversão com Number()
// template strings
// soma
// comparação com == e ===
// operadores lógicos