const number1 = document.getElementById("number1")
const number2 = document.getElementById("number2")
const result = document.getElementById("result")

const add = document.getElementById("add")
const subtract = document.getElementById("subtract")
const multiply = document.getElementById("multiply")
const divide = document.getElementById("divide")

function showResult() {
  result.classList.remove("hide")
}

function sum(value1, value2) {
  return Number(value1) + Number(value2)
}

function subtraction(value1, value2) {
  return Number(value1) - Number(value2)
}

function multiplication(value1, value2) {
  return Number(value1) * Number(value2)
}

function division(value1, value2) {
  return Number(value1) / Number(value2)
}

function blockTry() {
  if (number1.value.trim() === "" || number2.value.trim() === "") {
    result.textContent = "Os campos não podem estar vazio."
    return true
  } else if (isNaN(Number(number1.value)) || isNaN(Number(number2.value))) {
    result.textContent = "Os campos não podem conter letra."
    return true
  } else {
    return false
  }
}

add.addEventListener("click", () => {
  showResult()
  if (blockTry()) return
  result.textContent = sum(number1.value, number2.value)
})

subtract.addEventListener("click", () => {
  showResult()
  if (blockTry()) return
  result.textContent = subtraction(number1.value, number2.value)
})

multiply.addEventListener("click", () => {
  showResult()
  if (blockTry()) return
  result.textContent = multiplication(number1.value, number2.value)
})

divide.addEventListener("click", () => {
  showResult()
  if (blockTry()) return

  if (Number(number2.value) === 0) {
    result.textContent = "Não é possível dividir por zero."
  } else {
    result.textContent = division(number1.value, number2.value)
  }
})