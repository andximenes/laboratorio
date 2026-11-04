//SHALLOW COPY - CÓPIA SUPERFICIAL
const employee = {
    name: "Andrew",
    age: 33,
    address: {
        country: "Brazil",
        city: "Brasilía"
    }
}

const newEmployee = {...employee}

newEmployee.name = "Mathew"
newEmployee.age = 34
newEmployee.address.country = "England"
newEmployee.address.city = "Manchester"

console.log(employee)
console.log(newEmployee)

console.log(employee === newEmployee) //objetos principais diferentes
console.log(employee.address === newEmployee.address) // O objeto interno address é exatamente o mesmo


//DEEP COPY - CÓPIA PROFUNDA
const person = {
    fullName: "Takayoshi Ohmura",
    age: 22,
    salary: 8500,
    address: {
        country: "Japan",
        city: "Tokyo"

    }
}

const newPerson = structuredClone(person)
newPerson.fullName = "John Doe"
newPerson.age = 22
newPerson.address.country = "Brazil"
newPerson.address.city = "São Paulo"

console.log(person)
console.log(newPerson)


//Shallow Freezing — Congelamento superficial
//Utilizamos Object.freeze() para impedir alterações no primeiro nível.

const employee1 = {
    name: "Andre",
    address: {
        city: "Brasília"
    }
}

Object.freeze(employee1)

//4. Deep Freezing — Congelamento profundo
//Congelamos o objeto principal e também os objetos internos.


Object.freeze(employee1)
Object.freeze(employee1.address)