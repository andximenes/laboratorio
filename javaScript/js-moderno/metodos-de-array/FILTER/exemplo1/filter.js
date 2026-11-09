"use strict"

const products = [
    { id: 1, name: "Notebook", stock: 8 },
    { id: 2, name: "Mouse", stock: 0 },
    { id: 3, name: "Teclado", stock: 12 },
    { id: 4, name: "Monitor", stock: 0 },
    { id: 5, name: "Webcam", stock: 5 }
]

const availableProducts = products.filter((product) => {
    return product.stock > 0
})

console.log(availableProducts)