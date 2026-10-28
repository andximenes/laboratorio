const data = ["John Doe", 30, "Programmer", "john@email.com"]

const [name, age, occupation, email] = data

console.log(
    `Nome: ${name}, Age: ${age}, Occupation: ${occupation}, Email: ${email}`
)

const [, , x] = data
console.log(x)