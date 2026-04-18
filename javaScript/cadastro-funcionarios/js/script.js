const inputFullName = document.getElementById("fullName")
const inputBirthDay = document.getElementById("birthDay")
const inputOccupation = document.getElementById("occupation")

const male = document.getElementById("male")
const female = document.getElementById("female")
const inputOther = document.getElementById("other")

const add = document.getElementById("addBtn")

const resumeEmployer = document.getElementById("resumeEmployer")

//lista de empregados
const employers = []

//ação quando o botão Add é clicado
add.addEventListener("click", () => {
    const filedEmptyName = inputFullName.value.trim()
    const filedEmptyObd = inputBirthDay.value
    const filedEmptyOccupation = inputOccupation.value.trim()
    const filedEmptyOther = inputOther.value.trim()

    const selectedGender = document.querySelector('input[name="gender"]:checked')

    // checa se os campos estão vazios
    if (filedEmptyName === "" || filedEmptyObd === "" || filedEmptyOccupation === "") {
        return alert("field empty")
    }

    if (!male.checked && !female.checked && filedEmptyOther === "") {
        return alert("Select Male/Female or fill in Other")
    }

    const employee = {
        fullName: filedEmptyName,
        birthDay: filedEmptyObd,
        occupation: filedEmptyOccupation,
        gender: selectedGender ? selectedGender.value : filedEmptyOther
    }

    employers.push(employee)

    renderInformation()

    inputFullName.value = ""
    inputBirthDay.value = ""
    inputOccupation.value = ""
    inputOther.value = ""
    male.checked = false
    female.checked = false

    inputFullName.focus()
})

//renderiza as infomações
function renderInformation() {
    resumeEmployer.innerHTML = ""

    for(let i = 0; i < employers.length; i++){
        resumeEmployer.innerHTML += `
            <div class="employer">
                <div class="resume">
                    <p><strong>Full name:</strong> ${employers[i].fullName}</p>
                    <p><strong>Date of birth:</strong> ${formateDate(employers[i].birthDay)}</p>
                    <p><strong>Occupation:</strong> ${employers[i].occupation}</p>
                    <p><strong>Gender:</strong><span> ${employers[i].gender}</p>
                </div>
                <button onclick="removeItem()">remove</button>
            </div>
        `
    }
}

//remove item
function removeItem(index) {
    employers.splice(index, 1)
    renderInformation()
}

//formata a data para BR
//(desestruturacao de um array)
//o que vemos dentro do array viram classes, então ele vai pegar a data 2026/04/18 e adicionar cada parte em uma variável. year = 2026, month = 04, day = 18

// O split():

// pega uma string
// corta essa string com base em um separador no caso da data o separador era o "-" 2026-04-18
// devolve um array com os pedaços

function formateDate(date) {
    const [year, month, day] = date.split("-")
    return `${day}/${month}/${year}`
}