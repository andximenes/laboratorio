const inputFullName = document.getElementById("fullName")
const inputBirthDay = document.getElementById("birthDay")
const inputOccupation = document.getElementById("occupation")
const male = document.getElementById("male")
const female = document.getElementById("female")
const inputOther = document.getElementById("other")
const add = document.getElementById("addBtn")

//lista de empregados
const employers = []

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

function renderInformation() {
    
}

