
"use strict"

const form = document.querySelector("form")
const fullName = document.getElementById("fullName")
const age = document.getElementById("age")
const salary = document.getElementById("salary")
const city = document.getElementById("city")
const state = document.getElementById("stateSelect")

// FUNCIONÁRIOS INICIAIS
let employees = [
    {
        name: "Sarah Moraes",
        age: 29,
        salary: 2500,
        city: "Brasília",
        state: "Distrito Federal"
    },
    {
        name: "João Carlos",
        age: 18,
        salary: 1800,
        city: "São Paulo",
        state: "São Paulo"
    },
    {
        name: "Fernanda Ramos",
        age: 45,
        salary: 7200,
        city: "Rio de Janeiro",
        state: "Rio de Janeiro"
    }
]

// CLASSE
class Employee {
    constructor(name, age, salary, city, state) {
        this.name = name
        this.age = age
        this.salary = salary
        this.city = city
        this.state = state
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
        !Number.isFinite(salary) ||
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
