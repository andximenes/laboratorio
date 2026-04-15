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
                ${names[i]}
            </div>
        `
    }

    
}

addBtn.addEventListener("click", () => {
    const name = nameInput.value.trim()

    if (name === "") {
        return alert("O campo não pode ser vazio")
    }

    //array recebe um item 
    names.push(name)

    renderNames()

    nameInput.value = ""
    nameInput.focus()
})



