//objeto com construtor

function createPerson(name, age) {
    const person = {}

    person.name = name
    person.age = age
    person.message = function () {
        return `My name is ${this.name} and I am ${this.age} years old`
    }

    return person
}

const person1 = createPerson("Andrew", 22)
// console.log(person1.message())



//Array

const fruits = new Array()

fruits.push("Apple")
fruits.push("Grape")
fruits.push("Orange")

console.log(fruits)

fruits.shift() //remove o primeiro
fruits.pop() //remove o ultimo
fruits.splice(0, 1) //remove um item específico
console.log(fruits)

const colors = ["red", "pink", "blue", "white"]

const newColors = colors.filter(color => color !== "red")

console.log(newColors)

