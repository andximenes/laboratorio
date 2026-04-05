const form = document.querySelector("#form")
const number1 = document.querySelector("#number1")
const number2 = document.querySelector("#number2")
const message = document.querySelector("#message")

function showMessage(text, type) {
  message.textContent = text
  message.classList.remove("hidden", "success", "error")
  message.classList.add(type)
}

function divide(value1, value2) {
  if (value1.trim() === "" || value2.trim() === "") {
    throw new Error("Preencha os dois campos.")
  }

  const convertedNumber1 = Number(value1)
  const convertedNumber2 = Number(value2)

  if (isNaN(convertedNumber1) || isNaN(convertedNumber2)) {
    throw new Error("Digite apenas números válidos.")
  }

  if (convertedNumber2 === 0) {
    throw new Error("Não é permitido dividir por zero.")
  }

  return convertedNumber1 / convertedNumber2
}

form.addEventListener("submit", (event) => {
  event.preventDefault()

  try {
    const result = divide(number1.value, number2.value)
    showMessage(`Resultado: ${result}`, "success")
  } catch (error) {
    showMessage(error.message, "error")
  }
})