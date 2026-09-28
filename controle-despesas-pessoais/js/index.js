const descriptionInout = document.getElementById("description-input")
const priceInput = document.getElementById("price-input")
const category = document.getElementById("category")
const button = document.getElementById("button")
const ul = document.querySelectorAll(".expenses-list")
const span = document.querySelector(".total")

const expenses = []

button.addEventListener("click", () => {
    if(descriptionInout === "") {
        console.log("the field can not empty")
        return 
    }

    if(Number.isNaN(priceInput)){
        console.log("The fild most be a number")
        return
    }
    
    const expense = {
        description: descriptionInout.value,
        value: priceInput.value,
        category: category.value
    }
    
    expenses.push(expense)
    
})