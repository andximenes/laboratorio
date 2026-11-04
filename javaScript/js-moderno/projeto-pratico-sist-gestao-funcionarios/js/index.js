
"use strict"

const form = document.querySelector("form")
const fullName = document.getElementById("fullName")
const age = document.getElementById("age")
const salary = document.getElementById("salary")
const city = document.getElementById("city")
const state = document.getElementById("stateSelect")
const total = document.querySelector(".quantity")

// FUNCIONÁRIOS INICIAIS
let employees = [
    {
        name: "Sarah Moraes",
        age: 29,
        salary: 2500,
        address: {
            city: "Brasília",
            state: "Distrito Federal"
        }
        
    },
    {
        name: "João Carlos",
        age: 18,
        salary: 1800,
        address: {
            city: "São Paulo",
            state: "São Paulo"
        }
    
    },
    {
        name: "Fernanda Ramos",
        age: 45,
        salary: 7200,
        address: {
            city: "Rio de Janeiro",
            state: "Rio de Janeiro"
        }
    }
]

// CLASSE
class Employee {
    constructor(name, age, salary, city, state) {
        this.name = name
        this.age = age
        this.salary = salary
        this.address = {
            city: city,
            state: state
        }
        
    }
}

// INPUTS
fullName.oninput = () => {
    fullName.value = removeNumbers(fullName)
}

city.oninput = () => {
    city.value = removeNumbers(city)
}

salary.oninput = () => {
    const value = extractDigits(salary)
    const number = Number(value) / 100

    
    salary.value = number.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })

    // console.log(typeof(salary.value))
}

// FORMULÁRIO
form.onsubmit = (event) => {
    event.preventDefault()

    const nameValue = fullName.value.trim()
    const ageValue = Number(age.value)
    const salaryValue = Number(extractDigits(salary)) / 100
    const cityValue = city.value.trim()
    const stateValue = state.value

    // VALIDAÇÃO DOS CAMPOS
    if (
        !nameValue ||
        !Number.isInteger(ageValue) ||
        ageValue <= 0 ||
        !Number.isFinite(salaryValue) ||
        salaryValue <= 0 ||
        !cityValue ||
        !salaryValue
    ) {
        alert("Preencha todos os campos corretamente")
        return
    }

    // VERIFICAR SE O FUNCIONÁRIO JÁ EXISTE
    const exists = employees.some((employee) => {
        return employee.name.toLocaleLowerCase("pt-BR") === nameValue.toLocaleLowerCase("pt-BR")
    })

    if(exists) {
        alert("Este funcionário ja está cadastrado")
        fullName.focus()
        return
    }

    // CRIAR FUNCIONÁRIO
    const newEmployee = new Employee(
        nameValue,
        ageValue,
        salaryValue,
        cityValue,
        stateValue
    )

    employees = [...employees, newEmployee]

    console.log("Funcionário cadastrado:", newEmployee)
    console.log("Lista atualizada:", employees)

    showEmployee(newEmployee)

    // LIMPAR FORMULÁRIO
    form.reset()
    fullName.focus()
}

// FUNÇÕES
function extractDigits(element) {
    return element.value.replace(/\D/g, "")
}

function removeNumbers(element) {
    return element.value.replace(/\d/g, "")
}


function showEmployee(employee) {
    const listEmployeer = document.querySelector(".list-employeer")

    // Criando um NOVO card para cada funcionário
    const divEmployee = document.createElement("div")

    // Informações do nome e cidade
    const divNameAndCity = document.createElement("div")
    const name = document.createElement("span")
    const cityAndState = document.createElement("span")

    // Salário
    const divSalary = document.createElement("div")
    const salary = document.createElement("span")

    // Editar e remover
    const edit = document.createElement("img")
    const remove = document.createElement("img")

    // Classes CSS
    divEmployee.classList.add("employee")
    divNameAndCity.classList.add("box")
    divSalary.classList.add("box")

    edit.classList.add("box", "edit-button")
    remove.classList.add("box", "remove-button")

    // Preenchendo as informações
    name.textContent = employee.name

    cityAndState.textContent =
        `${employee.address.city} / ${employee.address.state}`

    salary.textContent = employee.salary.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })

    // Configurando imagens
    edit.setAttribute("src", "./assets/icons/edit-icon.png")
    edit.setAttribute("alt", "Editar funcionário")

    remove.setAttribute("src", "./assets/icons/trash-icon.png")
    remove.setAttribute("alt", "Remover funcionário")

    // Organizando elementos
    divNameAndCity.append(name, cityAndState)

    divSalary.append(salary)

    divEmployee.append(
        divNameAndCity,
        divSalary,
        edit,
        remove
    )

    // Inserindo o card na página
    listEmployeer.append(divEmployee)
}
