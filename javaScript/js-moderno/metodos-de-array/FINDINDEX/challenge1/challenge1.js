"use strict"

const products = [
    { id: 10, name: "Arroz", price: 25 },
    { id: 20, name: "Feijão", price: 9 },
    { id: 30, name: "Macarrão", price: 7 },
    { id: 40, name: "Óleo", price: 8 }
]

const productIndex = products.findIndex((product) => {
    return product.id === 30
})

if(productIndex === -1) {
    console.log("Porduct not found")
} else {
    console.log("Product found in the index: ", productIndex)
}