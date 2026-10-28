// "use strict"

const employees = [
    {
        id: 1,
        name: "Andre",
        age: 33,
        salary: 4500,
        address: {
            city: "Brasília",
            state: "DF"
        }
    },
    {
        id: 2,
        name: "Carlos",
        age: 28,
        salary: 3800,
        address: {
            city: "São Paulo",
            state: "SP"
        }
    },
    {
        id: 3,
        name: "Mateus",
        age: 25,
        salary: 3200,
        address: {
            city: "Recife",
            state: "PE"
        }
    }
]

console.log(employees)

//MISSÃO 1 - Crie uma cópia superficial do objeto do funcionário Andre utilizando Spread. Na cópia, altere o nome para Alexandre e a idade para 34.

const newEmployee = {...employees[0]}

newEmployee.name = "Alexandre"
newEmployee.age = 34
console.log("Shallow copy Alexandre:", newEmployee)

//MISSÃO 2 - Crie uma cópia profunda de Carlos com structuredClone(). Altere a cidade da cópia para Boston e o estado para Massachusetts.

const deepCopyCarlos = structuredClone(employees[1])

deepCopyCarlos.address.state = "Massachusetts"
deepCopyCarlos.address.city = "Boston"
console.log("Deep Copy Carlos:", deepCopyCarlos)

//MISSÃO 3 - Crie uma cópia de Mateus para realizar o experimento. Congele apenas o objeto principal com Object.freeze(). Tente alterar a idade e, depois, a cidade dentro de address.

const deepCopyMateus = structuredClone(employees[2])

Object.freeze(deepCopyMateus)
deepCopyMateus.age = 28
deepCopyMateus.address.state = "CE"
deepCopyMateus.address.city = "Fortaleza"

console.log(deepCopyMateus)
//O erro acontece porque um shallow freezing não contempla os objetos dentro de outro objeto, ele só congela o primeiro nível das propriedades.


//MISSÃO 4 - Crie uma nova cópia profunda de Andre. Congele o objeto principal e o objeto interno address. Depois, tente modificar o nome e a cidade.

const deepCopyAndre = structuredClone(employees[0])
Object.freeze(deepCopyAndre.address)
Object.freeze(deepCopyAndre)
console.log(Object.isFrozen(deepCopyAndre), Object.isFrozen(deepCopyAndre.address))

deepCopyAndre.name = "Junior"
deepCopyAndre.address.city = "Rio de Janeiro"

console.log(deepCopyAndre)

//MISSÃO 5 - Crie um novo array no qual Carlos passe a receber R$ 4.500, mantendo os salários do array employees original.

const newSalaryCarlos = employees.map((employee) => {
    if(employee.name === "Carlos") {
        return {
            ...employee,
            salary: 4500
        }
    }

    return employee
})

console.log(newSalaryCarlos)
console.log(employees)

//MISSÃO 6 - Adicione uma nova funcionária chamada Julia, com id 4, idade 27, salário de R$ 4.000 e endereço em Curitiba/PR, criando um novo array. Depois, crie outro array removendo Mateus.

const novoFuncionario = {
    id: 4,
    name: "Julia",
    age: 27,
    salary: 4000,
    address: {
        city: "Curitiba",
        state: "PR"
    }
}

const newEmployees = [...employees, novoFuncionario]

console.log(newEmployees)

const filteredEmployees = newEmployees.filter((employee) => {
    return employee.name !== "Mateus"
})

console.log(filteredEmployees)