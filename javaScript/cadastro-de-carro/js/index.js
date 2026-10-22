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

class car {
    constructor(brand, model, year) {
        this.brand = brand
        this.model = model
        this.year = year
    }
}

//FORM
form.onsubmit = (event) => {
    event.preventDefault()

    const newCar = new car(brand.value, model.value, Number(year.value))
    
    cars.push(newCar)

    renderInfo(newCar)

    clear()
}


//FUNCTIONS
function blockNumbers(variable) {
    const item = variable.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "")
    variable.value = item
}

function clear() {
    return form.reset()
}
function renderInfo(newCar) {
    const content = document.createElement("div")
    content.classList.add("content")

    const brand = document.createElement("span")
    brand.textContent = newCar.brand

    const model = document.createElement("span")
    model.textContent = newCar.model

    const year = document.createElement("span")
    year.textContent = newCar.year

    content.append(brand, model, year)

    carList.append(content)
}