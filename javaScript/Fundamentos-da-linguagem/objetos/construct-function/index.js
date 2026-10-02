function createProduct (name) {
    const product = {}

    product.name = name
    product.details = function () {
        console.log( `The product name is ${this.name}`)
    }

    return product
}

const product1 = createProduct("keyboard")

// console.log(product1.name)
product1.details()