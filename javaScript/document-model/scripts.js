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

/*
let content = document.querySelector("#guest-1")
console.log(content.textContent)//retorna o conteúdo visível e o oculto.

console.log(content.innerText)//retorna somente o conteúdo visível

console.log(content.innerHTML)//retorna o html como texto

//Alterando estilo

*/

let inputName = document.querySelector("#name")

//adiciona a classe
//inputName.classList.add("input-error")

//remove a classe
//inputName.classList.remove("input-error")


//método Toggle: se o css está ativado via javascript, e usarmos o método toggle e desativa o css e caso o css não estiver aplicado ele ativa o css

//inputName.classList.toggle("input-error")


//Modificando as propriedades css do elemento

//let button = document.querySelector("button")
//button.style.backgroundColor = "red"
