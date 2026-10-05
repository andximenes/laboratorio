const creditCard = "1234567891011121"
console.log(creditCard)

//pegando os ultimos 4 digitos
const lastForNumbers = creditCard.slice(-4)
console.log(lastForNumbers)

//ocultando os numeros anteriores
const maskedNumber = lastForNumbers.padStart(creditCard.length, "x")
console.log(maskedNumber)