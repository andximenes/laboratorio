const descriptionInput = document.getElementById("description-input")
const priceInput = document.getElementById("price-input")
const category = document.getElementById("category")
const button = document.getElementById("button")
const ul = document.querySelector(".expenses-list")
const span = document.querySelector(".total")

const expenses = []
let total = 0

button.addEventListener("click", () => {

    const description = descriptionInput.value.trim()
    const price = Number(priceInput.value)

    if (description === "") {
        console.log("The field cannot be empty")
        return
    }

    if (priceInput.value.trim() === "" || Number.isNaN(price)) {
        console.log("The field must be a number")
        return
    }

    if (category.value === "") {
        console.log("Select a category")
        return
    }


    const expense = {
        description: description,
        value: price,
        category: category.value
    }

    expenses.push(expense)

    const li = document.createElement("li")

    li.textContent = `${expense.description}, R$ ${expense.value} - ${expense.category}`

    ul.appendChild(li)

    descriptionInput.value = ""
    priceInput.value = ""
    category.value = ""

    total += price
    span.textContent = `Total: R$${total}`
    console.log(total)

})