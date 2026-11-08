//DESAFIO 1 - ATUALIZAR OS PREÇOS DO SISTEMA
// Crie um array chamado discountProducts que:
// - Aplique 15% de desconto nos preços.
// - Preserve os IDs e nomes.
// - Não altere o array original.

"use strict"

const products = [
    {
        id: 1,
        name: "Notebook",
        price: 3500,
    },
    {
        id: 2,
        name: "Mouse",
        price: 150,
    },
    {
        id: 3,
        name: "Keyboard",
        price: 250,
    },
    {
        id: 1,
        name: "Monitor",
        price: 3500,
    },
]

const discountProducts = products.map((discount) => {
    return {
        ...discount,
        price: discount.price - (discount.price * 0.15)
    }
})

console.log("Original: ", products)
console.log("Copy: ", discountProducts)