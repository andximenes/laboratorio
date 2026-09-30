const descriptionInput = document.getElementById("description-input")
const priceInput = document.getElementById("price-input")
const category = document.getElementById("category")
const button = document.getElementById("button")
const ul = document.querySelector(".expenses-list")
const span = document.querySelector(".total")

const filterCategory = document.getElementById("filter-category")

const expenses = []

let total = 0

span.textContent = `Total: R$ ${total.toFixed(2)}`


function renderExpenses(list) {

    ul.innerHTML = ""

    list.forEach((expense) => {

        const li = document.createElement("li")

        li.innerHTML = `
            <div class="item">
                ${expense.description}
            </div>

            <div class="price">
                R$ ${expense.value.toFixed(2)}
            </div>

            <span class="badge">
                ${expense.category}
            </span>

            <i class="bi bi-trash-fill"></i>
        `

        const i = li.querySelector("i")

        i.addEventListener("click", () => {

            const index = expenses.findIndex((item) => {
                return item === expense
            })

            if (index !== -1) {
                expenses.splice(index, 1)
            }

            total -= expense.value

            span.textContent = `Total: R$ ${total.toFixed(2)}`

            applyFilter()
        })

        ul.appendChild(li)
    })
}

button.addEventListener("click", () => {

    const description = descriptionInput.value.trim()

    const price = Number(
        priceInput.value
            .replace(/\./g, "")
            .replace(",", ".")
    )

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

    total += price

    span.textContent = `Total: R$ ${total.toFixed(2)}`

    applyFilter()

    descriptionInput.value = ""
    priceInput.value = ""
    category.value = ""
})

function applyFilter() {

    if (filterCategory.value === "all") {
        renderExpenses(expenses)
        return
    }

    const filteredExpenses = expenses.filter((expense) => {
        return expense.category === filterCategory.value
    })

    renderExpenses(filteredExpenses)
}


filterCategory.addEventListener("change", () => {
    applyFilter()
})


