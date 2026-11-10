"use strict"

const inventory = [
    { id: 1, name: "Notebook", quantity: 8 },
    { id: 2, name: "Mouse", quantity: 15 },
    { id: 3, name: "Teclado", quantity: 12 },
    { id: 4, name: "Monitor", quantity: 5 }
]

const totalQuantity = inventory.reduce((accumulator, item) => {
    return accumulator + item.quantity
}, 0)

console.log(totalQuantity)