"use strict"

const products = [
    { id: 1, name: "Notebook", stock: 5 },
    { id: 2, name: "Mouse", stock: 10 },
    { id: 3, name: "Teclado", stock: 0 },
    { id: 4, name: "Monitor", stock: 3 }
]

//existe produto sem estoque
const hasOutOfStock = products.some((product) => {
    return product.stock === 0
})

//qual é o produto que está esgotado
const productEsgotado = products.find((product) => {
    return product.stock === 0
})

console.log(productEsgotado)

const indexProduct = products.findIndex((index) => {
    return index.stock === 0
})

const id = indexProduct

console.log(id)

//adiconando valor ao stock
if(id !== -1) {
    const newProducts = products.map((product, index) => {
        if(index === id) {
            return {
                ...product,
                stock: 8
            }
        }
        
        return product
    })

    console.log(products)
    console.log(newProducts)
} else {
    console.log("product not found")
}




