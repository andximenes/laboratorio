let person = {
    name: "Rodrigo",
    surname: "Gonçalves", 
    email: "rodrigo@email.com"
}

let text = ""

for (let i in person) {
    console.log(`${i}: ${person[i]}`)
}

