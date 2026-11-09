"use strict"

const products = [
    { id: 101, name: "Notebook", price: 3500 },
    { id: 102, name: "Mouse", price: 150 },
    { id: 103, name: "Teclado", price: 250 },
    { id: 104, name: "Monitor", price: 1200 }
]

const productFound = products.find((product) => {
    return product.id === 103
})

if(productFound === undefined) {
    console.log("Product cannot found")
} else {
    console.log("Product: ", productFound.name)
}