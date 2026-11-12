"use strict"

//FORM
const form = document.getElementById("productForm")
const submitButton = form.querySelector('button[type="submit"]')

//INPUTS
const productName = document.getElementById("productName")
const productPrice = document.getElementById("productPrice")
const productQuantity = document.getElementById("productQuantity")
const productsList = document.getElementById("productsList")
const cancelButton = document.getElementById("cancelEdit")

//DASHBOARD
const totalProducts = document.getElementById("totalProducts")
const totalStockValue = document.getElementById("totalStockValue")

//CAMPO DE PESQUISA
const searchProduct = document.getElementById("searchProduct")

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

searchProduct.oninput = () => {
    renderProducts()
}


//PRODUCTS
let products = [
    {
        id: 1,
        name: "Keyboard",
        price: 200,
        quantity: 10
    },
    {
        id: 2,
        name: "Mouse",
        price: 45,
        quantity: 10
    },
    {
        id: 3,
        name: "Monitor",
        price: 1200,
        quantity: 30
    }
]

//NEXT ID
let nextId = 1

//EDIT ID
let editingId = null

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

    // CAPTURAR O NOME
    const name = productName.value.trim()

    if (name === "") {
        alert("Product name cannot be empty")
        productName.focus()
        return
    }

    // CONVERTER O PREÇO
    const cleanPrice = removeLetters(productPrice.value)
    const price = Number(cleanPrice) / 100

    if (!Number.isFinite(price) || price <= 0) {
        alert("Enter a valid price")
        productPrice.focus()
        return
    }

    // CONVERTER A QUANTIDADE
    const quantity = Number(productQuantity.value)

    if (
        productQuantity.value.trim() === "" ||
        !Number.isInteger(quantity) ||
        quantity < 0
    ) {
        alert("Enter a valid quantity")
        productQuantity.focus()
        return
    }

    // ****VERIFICAR DUPLICIDADE****
    const sameProduct = products.some((product) => {
        return (
            product.name.toLowerCase() === name.toLowerCase() &&
            product.id !== editingId
        )
    })

    if (sameProduct) {
        alert("Product already registered")
        productName.focus()
        return
    }

    // ****EDITAR OU CADASTRAR****
    if (editingId !== null) {

        products = products.map((product) => {

            if (product.id === editingId) {
                return {
                    ...product,
                    name,
                    price,
                    quantity
                }
            }

            return product
        })

        editingId = null

    } else {

        const newProduct = new Product(
            nextId,
            name,
            price,
            quantity
        )

        products = [...products, newProduct]

        nextId += 1
    }

    // ATUALIZAR A INTERFACE
    form.reset()

    editingId = null
    
    submitButton.textContent = "Register Product"

    cancelButton.hidden = true

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

    const search = searchProduct.value.trim().toLowerCase()

    const filteredProducts = products.filter((product) => {
        return product.name.toLocaleLowerCase().includes(search)
    })

    filteredProducts.forEach(showProduct)

    updateDashboard()
}

function showProduct(product) {
    const li = document.createElement("li")
    li.classList.add("product-card")

    const productInfo = document.createElement("div")
    productInfo.classList.add("product-info")

    const div = document.createElement("div")

    const name = document.createElement("h3")
    name.textContent = product.name

    const priceSapan = document.createElement("span")
    priceSapan.textContent = product.price.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
    priceSapan.classList.add("product-price")

    const productStock = document.createElement("span")
    if (product.quantity === 0) {
        productStock.textContent = "Out of stock"
        productStock.classList.add("out-of-stock")
    } else {
        productStock.textContent = `${product.quantity} units`
    }

    const productActions = document.createElement("div")
    productActions.classList.add("product-actions")

    const editButton = document.createElement("button")
    editButton.textContent = "Edit"
    editButton.type = "Button"
    editButton.classList.add("edit-button")

    const deleteButton = document.createElement("button")
    deleteButton.textContent = "Delete"
    deleteButton.type = "button"
    deleteButton.classList.add("delete-button")

    //BUTTON ACTIONS
    // DELETE
    deleteButton.onclick = () => {
        products = products.filter((item) => { //mantenha todos os produtos cujo ID seja diferente do ID do produto que queremos excluir.
            return item.id !== product.id
        })

        renderProducts()
    }

    //EDIT
    editButton.onclick = () => {
        //prepara o formulário para a edição capiturando os valores
        editingId = product.id

        productName.value = product.name

        productPrice.value = product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })

        console.log(priceSapan.value)

        productQuantity.value = product.quantity

        submitButton.textContent = "Save changes"

        cancelButton.hidden = false

        productName.focus()
    }

    //CANCEL EDITING
    cancelButton.onclick = () => {
        editingId = null

        form.reset()

        submitButton.textContent = "Register product"

        cancelButton.hidden = true
    }

    //APPENDS
    div.append(
        name, 
        priceSapan
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

//UPDATE DASHBOARD
function updateDashboard() {
    //Quantidade de produtos cadastrados
    totalProducts.textContent = products.length

    //Valor total dos produtos no estoque

    const stockValue = products.reduce((accumulator, product) => {
        return accumulator + (product.price * product.quantity)
    }, 0)

    //formatar o valor em reais
    totalStockValue.textContent = stockValue.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
}


//INICIALIZAÇÃO
renderProducts()