const display = document.getElementById("display")
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const equal = document.getElementById("equal")
const clear = document.getElementById("clear")

//valores da calculadora
let currentNumber = ""
let firstNumber = ""
let operator = ""

//functions
function updateDisplay(value) {
    display.textContent = value
}

function calculate(value1, value2, operator) {
    const number1 = Number(value1)
    const number2 = Number(value2)

    if(operator === "+") {
        return number1 + number2
    }

    if(operator === "-") {
        return number1 - number2
    }

    if(operator === "*") {
        return number1 * number2
    }

    if(operator === "/") {
        if(number2 === 0) {
            return "Não é possível dividir por zero"
        }

        return number1 / number2
    }
}

function cleanCalculator() {
    currentNumber = ""
    firstNumber = ""
    operator = ""

    updateDisplay("0")
}

//numbers
numbers.forEach((button) => {
    button.addEventListener("click", () => {
        currentNumber += button.textContent
        updateDisplay(currentNumber)
    })
})

//operators
operators.forEach((button) => {
    button.addEventListener("click", () => {
        if(currentNumber === "") {
            return
        }

        firstNumber = currentNumber
        operator = button.dataset.operator
        currentNumber = ""
    })
})

equal.addEventListener("click", () => {
    if(firstNumber === "" || currentNumber === "" || operator === "") {
        return
    }

    const result = calculate(firstNumber, currentNumber, operator)

    updateDisplay(result)

    currentNumber = String(result)

    firstNumber = ""
    operator = ""
})

clear.addEventListener("click", () => {
    cleanCalculator()
})
