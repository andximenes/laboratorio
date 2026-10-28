const numbers = [10, 20, 30, 40, 50]
console.log("Numbers", numbers)

const names = ["André", "Beatriz", "Carlos"]

//MAP
const double = numbers.map(number => number * 2)
console.log("Map", double)

const newNames = names.map((name) => {
    return name
})
console.log(newNames)

//FILTER
const older = numbers.filter(number => number > 25)
console.log("Filter", older)

const index = numbers.findIndex(number => number === 30)
console.log("findIndex", index)

//retorna o primeiro número que satisfaz a condição
const found = numbers.find(number => number > 25)
console.log("find", found)

const result = numbers.every(number => number > 5)
console.log("every", result)

const resultTwo = numbers.some(number => number > 45)
console.log("some", result)

const resultThree = numbers.filter(number => number > 45)
console.log(resultThree)


const total = numbers.reduce((accumulator, number) => {
    return accumulator + number
}, 0)
console.log("Reduce", total)