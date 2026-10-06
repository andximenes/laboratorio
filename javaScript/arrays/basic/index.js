//acessar
const fruits = ["Apple", "Banana", "Orange"]
console.log(fruits[0])

//alterar
fruits[1] = "Grape"
console.log(fruits)

//adicioanr
fruits.push("Watermelon")
console.log(fruits)

//remove o ultimo índice do array
fruits.pop()
console.log(fruits)

//percorrer um array
fruits.forEach((fruit) => {
    console.log(fruit)
})

//verificar se existe
console.log(fruits.includes("Watermelon"))

//Array com objetos
const products = [
    {id: 1, name: "Keyboard"},
    {id: 2, name: "Mouse"}
]

//find
const product = products.find((item) => {
    return item.id === 2
})

console.log(product)

//findIndex
const search = products.findIndex((item) => {
    return item.id === 1
})

console.log(search)

//filtrar
const prices = [10, 50, 100, 200]
const result = prices.filter((price) => {
    return price >= 100
})

console.log(result)

//map
const newPrices = prices.map((price) => {
    return price * 2
})

console.log(newPrices)

//Existe pelo menos 1
const ages = [12, 17, 25, 30]

const hasAdult = ages.some((age) => {
    return age <= 18
})

const allAdults = ages.every((age) => {
    return age >= 18
})

console.log(hasAdult)
console.log(allAdults)