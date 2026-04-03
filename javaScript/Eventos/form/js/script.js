const fullName = document.querySelector("#fullName")
const birthDate = document.querySelector("#birth")
const phone = document.querySelector("#phone")
const email = document.querySelector("#email")

const form = document.querySelector("form")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    console.log(`FullName: ${fullName.value}`)
    console.log(`birthDate: ${birthDate.value}`)
    console.log(`Phone: ${phone.value}`)
    console.log(`Email: ${email.value}`)
})


