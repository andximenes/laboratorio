"use strict"

let inventory = [
    { id: 1, name: "Notebook", stock: 5 },
    { id: 2, name: "Mouse", stock: 10 },
    { id: 3, name: "Teclado", stock: 7 },
    { id: 4, name: "Monitor", stock: 3 }
]

const productId = 3

const productIndex = inventory.findIndex((product) => {
    return product.id === productId
})  

console.log("Name :", inventory[productIndex].name, "Id: ", productId)

if(productIndex !== -1) {
    const newInventory = inventory.map((product, index) => {
        if(index === productIndex) {
            return {
                ...product, 
                stock: 15
            }
        }

        return product
    })

    console.log("Original array: ", inventory)
    console.log("New array: ", newInventory)

} else {
    console.log("Product not found")
}




