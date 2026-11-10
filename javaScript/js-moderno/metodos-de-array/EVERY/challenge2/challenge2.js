"use strict"

const products = [
    { id: 1, name: "Notebook", stock: 12 },
    { id: 2, name: "Mouse", stock: 8 },
    { id: 3, name: "Teclado", stock: 15 },
    { id: 4, name: "Monitor", stock: 6 }
]

const hasEnoughStock = products.every((product) => {
    return product.stock >= 10
})

if(hasEnoughStock) {
    console.log("Stock approved")
} else {
    console.log("Stock needs replenishiment")
}