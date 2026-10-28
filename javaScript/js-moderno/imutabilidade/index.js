console.log("Referência")

const person1 = {
    name: "John",
    age: 33,
    email: "john@email.com"
}

const person2 = person1 //person2 é uma referência de person1

console.log(person1)
console.log(person2)

person2.age = 40

console.log(person1)
console.log(person2)



console.log("criando um novo objeto a utilizando pos parâmetyros de outro objeto")

const car1 = {
    brand: "Vw",
    modelo: "Jetta",
    year: 2020
}

const car2 = {...car1}

console.log("car1: ", car1)
console.log("car2: ", car2)

car2.brand = "Hyundai"
car2.modelo = "HB20"
car2.year = 2026

console.log(car2)

//MESMO CONCEITO COM ARRAYS
const fruits = ["Apple", "Banana", "Grape"]

const fruits2 = [...fruits]

console.log("Fruits 1: ", fruits)
console.log("Fruits 2: ", fruits2)

fruits2.push("watermelon")

console.log("Fruits 1: ", fruits)
console.log("Fruits 2: ", fruits2)
