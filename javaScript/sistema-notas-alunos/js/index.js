
const fullName = document.getElementById("fullName")
const subject = document.getElementById("subject")

// PERIOD
const firstPeriod = document.getElementById("firstPeriod")
const secondPeriod = document.getElementById("secondPeriod")
const thirdPeriod = document.getElementById("thirdPeriod")
const fourthPeriod = document.getElementById("fourthPeriod")

// SCORE
const firstScored = document.getElementById("firstScored")
const secondScored = document.getElementById("secondScored")
const thirdScored = document.getElementById("thirdScored")
const fourthScored = document.getElementById("fourthScored")

const situation = document.getElementById("situation")

const form = document.querySelector("form")

const resume = document.querySelector(".resume")

const allGrades = []

// GET INPUTS
fullName.oninput = () => {
    const name = fullName.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "")
    fullName.value = name
}

// SCORES
firstScored.oninput = () => {
    firstScored.value = scored(firstScored.value)
}

secondScored.oninput = () => {
    secondScored.value = scored(secondScored.value)
}

thirdScored.oninput = () => {
    thirdScored.value = scored(thirdScored.value)
}

fourthScored.oninput = () => {
    fourthScored.value = scored(fourthScored.value)
}

situation.onchange = () => {
    filter()
}

// FORM
form.onsubmit = (event) => {
    event.preventDefault()

    // VALIDATION
    if (fullName.value.trim() === "") {
        alert("Please enter your full name")
        fullName.focus()
        return
    }

    if (subject.value === "") {
        alert("Please select a subject")
        subject.focus()
        return
    }

    const inputs = [
        firstScored,
        secondScored,
        thirdScored,
        fourthScored
    ]

    for (let i = 0; i < inputs.length; i++) {
        const value = inputs[i].value.trim()

        if (
            value === "" ||
            value === "." ||
            !Number.isFinite(Number(value)) ||
            Number(value) < 0 ||
            Number(value) > 100
        ) {
            alert("Please enter a valid score between 0 and 100")
            inputs[i].focus()
            return
        }
    }

    // INFORMATION
    const information = {
        name: fullName.value.trim(),
        subject: subject.value,

        scores: {
            first: Number(firstScored.value),
            second: Number(secondScored.value),
            third: Number(thirdScored.value),
            fourth: Number(fourthScored.value)
        }
    }

    allGrades.push(information)
    renderInfo(information)
    filter()
    clear()
}

// FUNCTIONS
function scored(score) {
    let value = score.replace(/[^0-9.]/g, "")
    
    const parts = value.split(".")
    
    if (parts.length > 1) {
        value = parts[0] + "." + parts.slice(1).join("")
        
    }

    return value
}

// RENDER INFORMATION
function renderInfo(information) {

    // TRANSFORM SCORES INTO ARRAY
    const grade = Object.values(information.scores)
    

    // SUM ALL SCORES
    const sum = grade.reduce((acc, value) => {
        return acc + value
    }, 0)

    // CALCULATE AVERAGE
    const average = sum / grade.length
    
    // STUDENT STATUS
    let status = ""

    if (average >= 6.0) {
        status = "Approved"
    } else {
        status = "Failed"
    }

    // CREATE CARD
    const div = document.createElement("div")
    div.classList.add("data", "box")

    // STUDENT NAME
    const name = document.createElement("span")
    name.textContent = information.name

    // AVERAGE
    const averageElement = document.createElement("span")
    averageElement.textContent = average.toFixed(2)

    //SUBJECT
    const subjectName = document.createElement("span")
    subjectName.textContent = information.subject

    // STATUS
    const statusElement = document.createElement("span")
    statusElement.textContent = status

    const iconRemove = document.createElement("img")
    iconRemove.src = "/assets/img/trash.png"
    iconRemove.alt = "Remove student"
    iconRemove.classList.add("trash-icon")

    if (status === "Approved") {
        statusElement.classList.add("status")
        
    } else {
        statusElement.classList.add("status")
        statusElement.style.backgroundColor = "red"
    }

    // ADD ELEMENTS TO CARD
    div.append(
        name,
        averageElement,
        subjectName,
        statusElement,
        iconRemove
    )

    // ADD CARD TO HTML
    resume.append(div)

    //REMOVE GRADE
    removeGrade(iconRemove, div)
   
}

function clear() {
    form.reset()
}

function filter() {
    const selected = situation.value
    const cards = document.querySelectorAll(".data")

    cards.forEach((card) => {
        const status = card.querySelector(".status").textContent

        if(
            selected === "All" || 
            selected === "" ||
            selected === status
            ) {
            card.style.display = "flex"
        } else {
            card.style.display = "none"
        }
    })
}

function removeGrade(iconRemove, div) {
    iconRemove.onclick = () => {
        div.remove()
    }
}