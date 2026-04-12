console.log("I'm alive 🔥")

const img = document.querySelector("#avatar")
const labelAvatar = document.getElementById("labelAvatar")
const inputName = document.getElementById("name")
const inputAge = document.getElementById("age")
const form = document.querySelector("form")
const inputMessage = document.querySelector(".message")


function showError(text) {
  inputMessage.classList.remove("hide", "success")
  inputMessage.classList.add("error")
  inputMessage.textContent = text
}

function showSuccess(text) {
  inputMessage.classList.remove("hide", "error")
  inputMessage.classList.add("success")
  inputMessage.textContent = text
}

//change the avatar
inputAge.addEventListener("input", (event) => {
  const value = event.target.value.trim()
  const age = Number(value)

  if (value === "") {
    labelAvatar.textContent = ""
    labelAvatar.style.backgroundColor = "rgba(127, 255, 197, 0)"
    return
  }

  if (age <= 11) {
    img.src = "./assets/image/child.svg"
    labelAvatar.textContent = "Child"
    labelAvatar.style.backgroundColor = "rgb(127, 255, 197)"
  } else if (age <= 17) {
    img.src = "./assets/image/youth.svg"
    labelAvatar.textContent = "Youth"
    labelAvatar.style.backgroundColor = "rgb(255, 127, 195)"
  } else if (age <= 59) {
    img.src = "./assets/image/adult.svg"
    labelAvatar.textContent = "Adult"
    labelAvatar.style.backgroundColor = "rgb(255, 251, 127)"
  } else {
    img.src = "./assets/image/senior.svg"
    labelAvatar.textContent = "Senior"
    labelAvatar.style.backgroundColor = "rgb(212, 127, 255)"
  }
})

//form
form.addEventListener("submit", (event) => {
  event.preventDefault()

  //status message
  if (inputName.value.trim() === "" || /\d/.test(inputName.value)) {
    showError("Don't use numbers or leave the field empty")
  } else if (inputAge.value.trim() === "" || isNaN(inputAge.value)) {
    showError("Don't use letters or leave the field empty")
  } else {
    showSuccess("Form sent successfully")
    console.log(`Name: ${inputName.value}`)
    console.log(`Age: ${inputAge.value}`)
  }
})