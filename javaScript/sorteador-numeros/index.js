const form = document.querySelector("form")
const amountNumbers = document.getElementById("amountNumbers")
const minimum = document.getElementById("minimum")
const maximum = document.getElementById("maximum")
const button = document.querySelector("button")
const result = document.getElementById("result")

const randomNumber = []

//pega os inputs
amountNumbers.oninput = () => {
    const amountNum = amountNumbers.value.replace(/\D/g, "")
    amountNumbers.value = amountNum
}

minimum.oninput = () => {
    const min = minimum.value.replace(/\D/g, "")
    minimum.value = min
    
}

maximum.oninput = () => {
    const max = maximum.value.replace(/\D/g, "")
    maximum.value = max
}


form.addEventListener("submit", (event) => {
    event.preventDefault()

    let amountX = Number(amountNumbers.value)
    const min = Math.ceil(minimum.value) //arrendonda para cima
    const max = Math.floor(maximum.value) //arredonda para baixo

    //Verificações
    if (amountNumbers.value === "" || amountX < 1) {
        alert("Informe a quantidade de números")
        amountNumbers.focus()
        return
    }

    if(minimum.value === "") {
        alert("O campo não pode ser vazio")
        minimum.focus()
        return
    }
    if (maximum.value === "") {
        alert("O campo não pode ser vazio")
        maximum.focus()
        return
    }

    if(min > max) {
        alert("Quantidade mínima não pode ser maior que a máxima")
        return
    }

    //limpa o form
    result.innerHTML = ""

    //renderiza a quantidade de vezes que os numeros serão mostrados
    for (let i = 1; i <= amountX; i++) {
        renderResult()
    }
    
    //limpa os campos do form
    clearFields()

})


function getRandom (min, max) {
    let newNumber

    do {
        //gera um número aleatório
        newNumber = Math.floor(Math.random() * (max - min + 1)) + min
    
    } while (randomNumber.includes(newNumber)) //repete se o número ja existe no array
    
    randomNumber.push(newNumber)
    
    return newNumber   
}
   

function renderResult () {
    const span = document.createElement("span")
    span.classList.add("show-number")

    span.textContent = getRandom (
        Number(minimum.value), 
        Number(maximum.value)
    )

    result.appendChild(span)
    
}

function clearFields () {
    amountNumbers.value =  ""
    minimum.value = ""
    maximum.value = ""

    amountNumbers.focus()
}