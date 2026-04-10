const titulo = document.getElementById("titulo")
const descricao = document.querySelector(".descricao")
const botao = document.getElementById("btn")
const inputs = document.querySelector("input")
const resultado = document.getElementById("resultado")
const lista = document.querySelector("#lista")


//selecionando elementos
const shoWlog = [titulo, descricao, botao, inputs]
for(let i = 0; i < shoWlog.length; i++) {
    console.log(shoWlog[i])
} 

//modificando conteúdo
titulo.textContent = "Novo título"
resultado.innerHTML = "<strong>Cadastro realizado com sucesso</strong>"

//alterando css
titulo.style.color = "blue"
titulo.style.backgroundColor = "lightgray"
titulo.style.padding = "10px"

//recebendo o valor o input quando o usuário clicar em enviar
botao.addEventListener("click", () => {
    console.log(`Nome digitado: ${inputs.value}`)
})

//criando e inserindo elementos
const novoItem = document.createElement("li")
novoItem.textContent = "Item criado com Javascript"
lista.appendChild(novoItem)


const listaNomes = ["Ana", "Bruna", "Carla"]

for (const nome of listaNomes) {
    const createLi = document.createElement("li")
    
    createLi.textContent = nome
    lista.appendChild(createLi)

}

const itemRemovido = lista.querySelector("li")
if (itemRemovido) {
    itemRemovido.remove()
}

