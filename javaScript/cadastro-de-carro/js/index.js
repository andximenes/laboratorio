const form = document.querySelector("form")
const brand = document.getElementById("brand")
const model = document.getElementById("model")
const year = document.getElementById("year")
const button = document.getElementById("button")

const carList = document.querySelector(".car-list")

const cars = []

//INPUTS
brand.oninput = () => {
    blockNumbers(brand)
}

model.oninput = () => {
    blockNumbers(model)
}

year.oninput = () => {
    const formatYear = year.value.replace(/\D/g, "")
    year.value = formatYear
}

//CLASS
class Car {
    constructor(brand, model, year) {
        this.brand = brand
        this.model = model
        this.year = year
    }
}

//FORM
form.onsubmit = (event) => {
    event.preventDefault()

    const newCar = new Car(
        brand.value, 
        model.value, 
        Number(year.value)
    )

    //VALIDATE EMPTY FIELDS
    if(
        brand.value.trim() === ""|| 
        model.value.trim() === ""||
        year.value.trim() === ""
    ) {
        alert("Please, fill in all fields")
        brand.focus()
        return
    }

    //VALIDATE YEAR
    const carYear = newCar.year

    if(
        carYear < 1886 ||
        carYear > new Date().getFullYear() + 1
    ) {
        year.value = ""
        alert("Please, enter a valid year")
        year.forcus()
        
        return

    }

    cars.push(newCar)

    console.log(cars)

    renderInfo(newCar)

    clear()
}


//FUNCTIONS
function blockNumbers(variable) {
    const item = variable.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "")
    variable.value = item
}

function clear() {
    form.reset()
}

function renderInfo(newCar) {
    const card = document.createElement("div")
    card.classList.add("card")

    const divBrand = document.createElement("div")
    divBrand.classList.add("content")

    const brand = document.createElement("span")
    brand.textContent = newCar.brand
    
    const divModel = document.createElement("div")
    divModel.classList.add("content")

    const model = document.createElement("span")
    model.textContent = newCar.model

    const divYear = document.createElement("div")
    divYear.classList.add("content")

    const year = document.createElement("span")
    year.textContent = newCar.year

    const divTrashIcon = document.createElement("div")
    divTrashIcon.classList.add("trash-icon")

    const btnRemove = document.createElement("img")
    btnRemove.src = "/assets/delete.png"
    btnRemove.alt = "trash icon"

    divBrand.appendChild(brand)
    divModel.appendChild(model)
    divYear.appendChild(year)
    divTrashIcon.appendChild(btnRemove)

    card.append(
        divBrand, 
        divModel, 
        divYear,
        divTrashIcon
    )

    carList.append(card)

    removeItem(btnRemove, newCar, card)
}


function removeItem(btnRemove, newCar, card) {
    btnRemove.onclick = () => {

        const index = cars.findIndex((car) => {
            return car === newCar
        })

        if(index !== -1) {
            cars.splice(index, 1)
            card.remove()
        }
        
        console.log(cars)
    }
}

