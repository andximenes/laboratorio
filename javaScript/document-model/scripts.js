/*
//Visualizar conteúdo do document
console.log(document)




//Obter o title da página
console.log(document.title)




//Acessando elemento pelo ID

const guest = document.getElementById("guest-2")
console.log(guest)





//mostra as propriedades do objeto
console.dir(guest)





//Acessando elemento pela classe
let guestsByClass = document.getElementsByClassName("guest")
console.log(guestsByClass)

console.log(guestsByClass.item(0))
console.log(guestsByClass[0])

//Acessando elementos pela tag
let guestByTag = document.getElementsByTagName("li")
console.log(guestByTag)




//QUERY SELECTOR

//ID
let getInfo = document.querySelector("#guest-1")
console.log(getInfo)

//CLASS
let getInfoByClass = document.querySelector(".guest")
console.log(getInfoByClass)

*/




//Manipulando conteúdo
//let content = document.querySelector("#guest-1 span")
//console.log(content.textContent)
//content.textContent = "André"
//console.log(content)

// let content = document.querySelector("#guest-1")
// console.log(content.textContent)//retorna o conteúdo visível e o oculto.

// console.log(content.innerText)//retorna somente o conteúdo visível

// console.log(content.innerHTML)//retorna o html como texto




//Alterando estilo

//let inputName = document.querySelector("#name")

//adiciona a classe
//inputName.classList.add("input-error")

//remove a classe
//inputName.classList.remove("input-error")


//método Toggle: se o css está ativado via javascript, e usarmos o método toggle e desativa o css e caso o css não estiver aplicado ele ativa o css

//inputName.classList.toggle("input-error")


//Modificando as propriedades css do elemento

//let button = document.querySelector("button")
//button.style.backgroundColor = "red"




//CRIANDO ELEMENTO

// const ul = document.querySelector("ul") 
// const li = document.createElement("li")
// const span = document.createElement("span")

// ul.append(li)
// li.append(span)

// li.classList.add("guest")
// span.textContent = "André"






//Manipulando Atributos

// const input = document.querySelector("input")

//Atualiza um atributo
// input.setAttribute("disabled", true)
// input.setAttribute("type", "file")

// input.removeAttribute("id") //Remove um atributo







//Eventos

// window.addEventListener("load", ()=>{
//     console.log("A página foi carregada!")
// })

// addEventListener("click", (event)=>{
//     event.preventDefault()

//     //todas as informações do evento
//     // console.log(event)

//     //retorna o elemento clicado
//     // console.log(event.target)

//     //retorna o text context do elemento clicado
//     console.log(event.target.textContent)
// })


//Eventos em um elemento específico
// const ul = document.querySelector("ul")
// ul.addEventListener("scroll", (event)=>{
//     console.log(event)
// })




//Eventos de formulário

// const form = document.querySelector("form")
// form.onsubmit = (event)=>{
//     event.preventDefault()
//     console.log("Você fez submit no formulário")
// }




//Eventos em input
const input = document.querySelector("input")

//keydown - quando uma tecla é precionada

// input.addEventListener("keydown", (event)=>{
//     console.log(event.key)
// })

//dispara quando o tipo da teclar caractere é preciosana (Letas, numeros, pontos etc)
// input.addEventListener("keypress", (e)=>{
//     console.log(e.key)
// })


//Quando o conteudo do input muda
// input.onchange = ()=>{
//     console.log("O input mudou!")
// }
