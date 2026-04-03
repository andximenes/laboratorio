const firstNumber = document.querySelector("#firstNumber")
const secondNumber = document.querySelector("#secondNumber")
const result = document.querySelector("#result")
const form = document.querySelector("form")


//regex substitui/ bloqueia as letras
function regexConvert (campo) {
    campo.addEventListener("input", () => {
        const regex = /\D+/g
        campo.value = campo.value.replace(regex, "")
    })

}

//Convertendo
regexConvert(firstNumber)
regexConvert(secondNumber)

//função que receba 2 números e retorne a soma.
function sum (a, b) {
    return result.textContent = Number(a) + Number(b)
}

//Usando arrow function somar
// const sum = (a, b) =>{
//     return result.textContent = Number(a) + Number(b)
// }


//Mostrando o resultado
form.addEventListener("submit", (event) => {
    event.preventDefault()
    sum(firstNumber.value, secondNumber.value)
    
})


