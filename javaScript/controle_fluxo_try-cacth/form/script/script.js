const fullName = document.querySelector("#fullName")
const cpf = document.querySelector("#cpf")
const apartament = document.querySelector("#apartament")
const form = document.querySelector("form")
const resume = document.querySelector("#resume")

function RegisterConfirm(fName, fCpf, fApartament, fPet) {
    if (fName.trim() === "") {
        throw new Error("Campo nome vazio")
    }

    if (/\d/.test(fName)) {
        throw new Error("Esse campo não pode conter números")
    }

    if (fCpf.trim() === "") {
        throw new Error("Digite o CPF")
    }

    if (isNaN(fCpf)) {
        throw new Error("Digite apenas números no CPF")
    }

    if (fApartament.trim() === "") {
        throw new Error("Digite o apartamento")
    }

    if (!fPet) {
        throw new Error("Selecione uma opção de pet")
    }

    return {
        name: fName,
        cpf: fCpf,
        apartament: fApartament,
        pet: fPet
    }
}

function showMessage(text, type) {
    resume.innerHTML = text
    resume.classList.remove("hidden", "success", "error")
    resume.classList.add(type)
}

form.addEventListener("submit", (event) => {
    event.preventDefault()

    try {
        const petSelected = document.querySelector('input[name="options"]:checked')

        const userData = RegisterConfirm(
            fullName.value,
            cpf.value,
            apartament.value,
            petSelected ? petSelected.value : null
        )

        showMessage(
            `
            <p><strong>Name:</strong> ${userData.name}</p>
            <p><strong>CPF:</strong> ${userData.cpf}</p>
            <p><strong>Apt:</strong> ${userData.apartament}</p>
            <p><strong>Pet:</strong> ${userData.pet}</p>
            `,
            "success"
        )

    } catch (error) {
        showMessage(`<p>${error.message}</p>`, "error")
    }
})