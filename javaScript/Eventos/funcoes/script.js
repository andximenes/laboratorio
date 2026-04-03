//Exercício 1 - Criar um função que mostre "Olá"

function greetings (){
    console.log("Hello")
}

greetings()

//Exercício 2 - Criar um função que receba um nome e mostre
const nickName = document.querySelector("#nickName")
const form = document.querySelector("form")

//pegando o input 
nickName.addEventListener("input", () => {
    // console.log(nickName.value)
})

//função com parâmetro
function showNickName (name) {
    console.log(`Hello, ${name}`)
}

form.addEventListener("submit", (event) =>{
    event.preventDefault()
    showNickName(nickName.value)
})

