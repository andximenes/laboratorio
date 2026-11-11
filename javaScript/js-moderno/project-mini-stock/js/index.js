"use strict"

//FORM
const form = document.getElementById("productForm")

//INPUTS
const productName = document.getElementById("productName")
const productPrice = document.getElementById("productPrice")
const productQuantity = document.getElementById("productQuantity")
const productsList = document.getElementById("productsList")

productName.oninput = () => {
   productName.value = removeNumbers(productName.value)
}

productPrice.oninput = () => {
    const cleanValue = removeLetters(productPrice.value)

    const number = Number(cleanValue) /100

    const formattedPrice = number.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })

    productPrice.value = formattedPrice
    
}

productQuantity.oninput = () => {
    productQuantity.value = removeLetters(productQuantity.value)
}


//PRODUCTS
let products = []

//NEXT ID
let nextId = 1

//CLASS

class Product {
    constructor(id, name, price, quantity) {
        this.id = id
        this.name = name
        this.price = price
        this.quantity = quantity
        
    }
}


form.onsubmit = (event) => {
    event.preventDefault()
    
    //Capturar nome do do produto
    const name = productName.value.trim()

    if(name === "")  {
        alert("The field Product name cannot be empty")
        productName.focus()
        return
    }

    //Converter o preço para número
    const cleanPrice = removeLetters(productPrice.value)
    const price = Number(cleanPrice) /100

    if(!Number.isFinite(price) || price <= 0) {
        alert("Enter a valide price")
        productPrice.focus()
        return
    }

    //Converter a quantidade para número
    const quantity = Number(productQuantity.value)

     if(!Number.isFinite(quantity) || quantity <= 0) {
        alert("Quantity most be above zero")
        productQuantity.focus()
        return
    }

    //Criar o objeto newProduct

    const newProduct = new Product(nextId, name, price, quantity)

    //Verifica se o produto já foi cadatrado

    const sameProduct = products.some((product) => {
        return product.name.toLowerCase() === newProduct.name.toLowerCase()
        
    })

    if(!sameProduct) {
        //Adicionar ao array de forma imutável
        products = [...products, newProduct]

        nextId += 1

        form.reset() 

    } else {
        alert("Product already registered")

        productName.focus()
        return
    }

    renderProducts()

    console.log(products)    
}


//Funções
function removeNumbers(productName) {
    return productName.replace(/\d/g, "")
}

function removeLetters(product) {
    return product.replace(/\D/g, "")
}

function renderProducts() {
    productsList.replaceChildren() //Remove todos os elementos que estiverem dentro da <ul> - replaceChildren() não apaga os produtos do array. Ele limpa somente os elementos HTML da lista.

    products.forEach((product) => {
        showProduct(product)
    })
}

function showProduct(product) {
    const li = document.createElement("li")
    li.classList.add("product-card")

    const productInfo = document.createElement("div")
    productInfo.classList.add("product-info")

    const div = document.createElement("div")

    const name = document.createElement("h3")
    name.textContent = product.name

    const productPrice = document.createElement("span")
    productPrice.textContent = product.price
    productPrice.classList.add("product-price")

    const productStock = document.createElement("span")
    productStock.classList.add("product-stock")
    productStock.textContent = product.quantity

    const productActions = document.createElement("div")
    productActions.classList.add("product-actions")

    const editButton = document.createElement("button")
    editButton.textContent = "Edit"
    editButton.type = "Button"
    editButton.classList.add("edit-button")

    const deleteButton = document.createElement("button")
    deleteButton.textContent = "Delete"
    deleteButton.type = "Button"
    deleteButton.classList.add("delete-button")

    //APPENDS
    div.append(
        name, 
        productPrice
    )

    productInfo.append(
        div,
        productStock,
        productActions
    )

    productActions.append(
        editButton, 
        deleteButton
    )

    li.append(
        productInfo,
        productActions
    )

    productsList.append(li)
}
