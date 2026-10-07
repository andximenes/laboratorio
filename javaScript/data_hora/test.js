const products = [
    {
        id: 1,
        name: "Keyboard",
        price: 150,
        createdAt: "2026-10-07"
    },
    {
        id: 2,
        name: "Mouse",
        price: 80,
        createdAt: "2026-10-01"
    },
    {
        id: 3,
        name: "Monitor",
        price: 900,
        createdAt: "2026-09-20"
    }
]

//encontrar um produto
const product = products.find((item) => item.name === "Mouse")
console.log(product)

//alterar o preço
product.price = 100
console.log(product)

//remover um produto
const index = products.findIndex((item) => item.id === 2)
products.splice(index, 1)
console.log(products)

//mostrar produtos acima de 100,00
const expensiveProducts = products.filter((item) => item.price > 100)
console.log(expensiveProducts)

// Criar um novo array apenas com os nomes
const names = products.map((item) => item.name)
console.log(names)

// Calcular o valor total
const total = products.reduce(function (sum, item) {
    return sum + item.price
}, 0)

console.log(total)

