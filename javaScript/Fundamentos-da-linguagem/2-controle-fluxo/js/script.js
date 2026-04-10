//classificação de aluno
console.log("⬇️ Controle de fluxo ⬇️")

const studentName = "Carlos"
const  grade = 8.5
const attendance = 78

if (grade >= 7 && attendance >= 75) {
    console.log(`${studentName}, passed 🚀`)
} else if (grade >= 5 && attendance >= 75) {
    console.log(`${studentName}, is recovering. 🫤`)
} else {
    console.log(`${studentName}, failed. 😭 `)
}

//operador ternário
console.log("⬇️ Operador Ternário")

const age = 28
const message = age >= 18 ? "legal age" : "underage"
console.log(message)

//Switch
console.log("⬇️ Switch ⬇️")

const perfil = "admin"

switch (perfil) {
  case "admin":
    console.log("Acesso total ao sistema")
    break
  case "editor":
    console.log("Pode editar conteúdos")
    break
  case "visitante":
    console.log("Acesso apenas para visualização")
    break
  default:
    console.log("Perfil não reconhecido")
}


//For
console.log("⬇️ for ⬇️")

for (let i = 1; i <= 5; i++) {
    console.log(`Executing step ${i}`)
}


//Incremento
console.log("⬇️ Incremento ⬇️")

let i = 5;
// console.log(++i) //Incrementa primeiro depois usa o valor
console.log("valor: " + i++ + ", ou seja, i++. Usa o valor primeiro") // Usa o valor primeiro e depois incrementa
console.log("valor: " + i + ", ou seja, ++i. Depois incrementa")


//Mostrar a tabuada do 3
let value = 3

for (i = 0; i <= 10; i++) {
    console.log(` ${value} x ${i} = ${value * i}`)
}

console.log("⬇️ for em um array ⬇️")
//percorrer um array
let fruits = ["Apple", "Banana", "Grape"]
for(let i = 0; i <= 2; ++i) {
    console.log(`${fruits[i]}`)
}

console.log("⬇️ Somar valores de um array ⬇️")

let arrayNum = [10, 20, 30, 40, 50]
let total = 0

for (let i = 0; i < arrayNum.length; i++){
    total += arrayNum[i]
    
}

console.log(`Total = ${total}`)

console.log("⬇️ Descobrir números pares de 1 a 20 ⬇️")
for(i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`${i} = par`)
    }else {
        console.log(`${i} = ímpar`)
    }
}

console.log("⬇️ Descobrir quantas letras 'A' existem em uma palavra ⬇️")

let word = "javascript"
let counter = 0

for (let i = 0; i < word.length; i++) {
  if (word[i] === "a") {
    counter++
  }
}

console.log(counter);

//while
console.log("⬇️ Exemplos com While ⬇️")
let counterWhl = 0

while(counterWhl <= 3){
    console.log(`tryed ${counterWhl}`)
    counterWhl++
}

//Break e continue
console.log("⬇️ break e continue ⬇️")
for(let i = 1; i <= 10; i++){
    if (i === 3) {
        continue
    }

    if (i === 8) {
        break
    }

    console.log(i)
}

// decidir caminhos com if
// escolher casos com switch
// repetir ações com for e while
// interromper ou pular execuções com break e continue