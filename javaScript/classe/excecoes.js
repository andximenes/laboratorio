class Product {
    constructor (name, price) {

        if (name.trim() === "") {
            throw new Error ("The name cannot be empty")
        }

        if (price <= 0) {
            throw new Error ("The price must greater than")
        }

        this.name = name
        this.price = price
    }

    details () {
        return `${this.name} - R$${this.price.toFixed(2)}`
    }
}

try {
    const product1 = new Product ("Mouse", -150)
    console.log(product1.details())

} catch (error) {
    console.log(error.message)
}
