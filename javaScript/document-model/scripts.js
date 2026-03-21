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