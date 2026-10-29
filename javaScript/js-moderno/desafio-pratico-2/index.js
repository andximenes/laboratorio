"use strict"

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
    },
    {
        id: 4,
        name: "Julia",
        age: 27,
        salary: 4000,
        address: {
            city: "Curitiba",
            state: "PR"
        }
    }
]

//MISSÃO 7 - AUMENTO SALARIAL DE 10%
//criar um novo array chamado employeesWithIncrease, contendo todos os funcionários com os salários atualizados.

const employeesWithIncrease = employees.map((employeeIncrease) => {
    return {
        ...employeeIncrease,
        salary: employeeIncrease.salary * 1.10
    }
})

console.log("Employees initial salary: ", employees)
console.log("Employees additional 10% with salary: ", employeesWithIncrease)

//Missão 8 — Filtrar funcionários por salário
//O setor de Recursos Humanos deseja identificar todos os funcionários que recebem R$ 4.000 ou mais.

const highSalaryEmployees = employees.filter(employee => employee.salary >= 4000)

console.log("High salary: ", highSalaryEmployees)

//MISSÃO 9 - Calcular a folha salarial
//utilizar reduce() para somar os salários de todos os funcionários.

const totalSalary = employees.reduce((accumulator, employeesSalary) => {
    return accumulator + employeesSalary.salary
}, 0)

const totalFormatted = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
}).format(totalSalary);

console.log("Total salary:", totalFormatted)

//Missão 10 — Buscar funcionário e desestruturar
//O RH solicitou os dados do funcionário cujo id é igual a 2. Sua tarefa é localizar Carlos e extrair determinadas propriedades do objeto.

const employeeId = employees.find(employee => employee.id === 2)
const {name, salary, address} = employeeId
const {city, state} = address

console.log("Employer:", name)
console.log("Salary:", salary)
console.log("City:", city)
console.log("State:", state)

//Missão 11 — Atualizar endereço sem alterar o original
//Mateus foi transferido de Recife/PE para Fortaleza/CE.
//Crie um novo array chamado updatedAddresses, alterando somente o endereço de Mateus.

const updatedAddresses = employees.map((employee) => {
    if(employee.id === 3) {
      return {
        ...employee,
        address: {
            ...employee.address,
            city: "Fortaleza",
            state: "CE"
        }
      }
    }
    return employee
})

console.log("Mateus updates: ", updatedAddresses[2])


//Missão 12 — Sistema de gestão de funcionários
//A empresa quer realizar quatro operações, sempre preservando o array original.

//1. Adicionar um novo funcionário chamado Pedro, com id: 5, idade 30 anos, salário R$ 5.000 e endereço em Goiânia/GO.

const newEmployee = {
    id: 5,
    name: "Pedro",
    age: 30,
    salary: 5000,
    address: {
        city: "Goiânia",
        state: "GO"
    }
}

const newEmployees = [...employees, newEmployee]
console.log("New Employes", newEmployees)

//2. Remover Carlos do novo array.
const removeEmploye = newEmployees.filter((employee) => {
    return employee.name !== "Carlos"
})

console.log("Fired Carlos", removeEmploye)

//3. Conceder aumento de R$ 500 para os funcionários que recebem menos de R$ 4.500.

const salaryIncrease = removeEmploye.map((employee) => {
    return {
        ...employee,
        salary: employee.salary < 4500 
        ? employee.salary + 500 
        : employee.salary    
    }
    
})

console.log("500 dollars added for those who earn less than 4500:", salaryIncrease)

console.log("Original: ", employees)

//4. Calcular o total da nova folha salarial.

const newPayroll = salaryIncrease.reduce((accumulator, payroll) => {
    return accumulator + payroll.salary
}, 0)

const totalPayroll = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
}).format(newPayroll)

console.log(totalPayroll)
