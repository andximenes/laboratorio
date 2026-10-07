let date = new Date()

//mostrando a data atual
console.log(date)

//manipulado a data
let newDate = new Date("2026-01-01T09:30:00")
console.log(newDate)

//Dia da semena
let weekday = new Date().getDay()

for(let i = 0; i <= 6; i++) {

    switch (weekday) {
        case 0:
            console.log("Sunday")
            break
        case 1: 
            console.log("Monday")
            break
        case 2: 
            console.log("Tuesday")
            break
        case 3: 
            console.log("Wednesday")
            break
        case 4: 
            console.log("Thursday")
            break
        case 5: 
            console.log("Friday")
            break
        case 6: 
            console.log("Saturday")
            break
    }
}

//mostra apenas os dois ultimo numeros do ano
console.log(date.toLocaleDateString("en", {
    dateStyle: "short"
}))

// const currentLocale = Intl.DateTimeFormat().resolvedOptions()
// console.log(currentLocale)

console.log(date.getYear())