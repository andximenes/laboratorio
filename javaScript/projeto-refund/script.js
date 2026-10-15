const form = document.querySelector("form")
const expense = document.getElementById("expense")
const category = document.getElementById("category")
const amount = document.getElementById("amount")
const ul = document.querySelector("ul")
const countExpense = document.getElementById("countExpense")
const total = document.getElementById("total")

let expenses = []

form.onsubmit = (event) => {
    event.preventDefault()

    if (expense.value.trim() === "") {
        alert("Informe o nome da dispesa")
        expense.focus()
        return
    }

    if(category.value === "") {
        alert("Informe o nome da categoria")
        category.focus()
        return
    }

    const valueExpense = Number(amount.value.replace(/\D/g, "")) /100

    if( valueExpense <= 0) {
        alert("Informe um valor diferente de zero")
        amount.focus()
        return
    }
    

    const newExpense = {
        id: new Date().getTime(),
        expense: expense.value,
        category_id: category.value,
        category_name: category.options[category.selectedIndex].text,
        amount: amount.value,
        created_at: new Date()
    }

    expenses.push(newExpense)
    console.log(expenses)

    showExpense(newExpense)

    expense.value = ""
    category.value = ""
    amount.value = ""

    expense.focus()
}

amount.oninput = () => {
    let value = amount.value.replace(/\D/g, "")
    value = Number(value) / 100
    amount.value = formatCurrency(value)
}

function formatCurrency(value) {
    value = value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })

    return value
}

function showExpense(newExpense) {
    try {
        const li = document.createElement("li")
        li.classList.add("expense")

        const img = document.createElement("img")
        img.setAttribute("src", `img/${newExpense.category_id}.svg`)
        img.setAttribute("alt", "Ícone de tipo da despesa")

        const div = document.createElement("div")
        div.classList.add("expense-info")

        const strongDiv = document.createElement("strong")
        strongDiv.textContent = newExpense.expense

        const spanDiv = document.createElement("span")
        spanDiv.textContent = newExpense.category_name

        const spanValue = document.createElement("span")
        spanValue.classList.add("expense-amount")
        spanValue.textContent = newExpense.amount

        const imgRemove = document.createElement("img")
        imgRemove.setAttribute("src", "img/remove.svg")
        imgRemove.setAttribute("alt", "Remover despesa")
        imgRemove.classList.add("remove-icon")

        //remove Item
        imgRemove.onclick = () => {
            const index = expenses.findIndex((expense) => {
                return expense.id === newExpense.id
            })

            if (index !== -1) {
                expenses.splice(index, 1)

                li.remove()

                countExpense.textContent = expenses.length
                
                updateTotal()
            }
        }

        li.appendChild(img)

        li.appendChild(div)
        div.appendChild(strongDiv)
        div.appendChild(spanDiv)

        li.appendChild(spanValue)
        li.appendChild(imgRemove)

        ul.appendChild(li)

        countExpense.textContent = expenses.length
    
        updateTotal()

    } catch (error) {
        console.log(error.message)
    }
}

function updateTotal() {
    const sum = expenses.reduce((total, expense) => {
        const value = Number(expense.amount.replace(/\D/g, "")) / 100
        return total + value
    }, 0)

    total.textContent = formatCurrency(sum)
}