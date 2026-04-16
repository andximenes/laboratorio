const nameInput = document.getElementById("nameInput")
const addBtn = document.getElementById("addBtn")
const nameList = document.getElementById("nameList")

//lista de nomes
const names = []

function renderNames() {
    //div nameList começa como vazio
    nameList.innerHTML = ""

    for(let i = 0; i < names.length; i++) {
        nameList.innerHTML += `
            <div class="item">
                <span>${names[i]}</span>
                <button class="remove-btn" onclick="removeName(${i})">Remove</button>
            </div>
        `
    }
}

//function remove name
function removeName(index) {
    names.splice(index, 1)
    renderNames()
}

addBtn.addEventListener("click", () => {
    //valida que não tenha espaço no input e valida se o input está vazio
    const name = nameInput.value.trim()
    if (name === "") {
        return alert("O campo não pode ser vazio")
    }

    //array recebe (empurra) um item 
    names.push(name)

    //renderiza o nome inserido 
    renderNames()

    //limpa e dá foco no input
    nameInput.value = ""
    nameInput.focus()
})



