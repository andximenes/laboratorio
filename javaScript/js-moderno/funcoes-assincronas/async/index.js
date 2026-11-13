"use strict"

async function getNumber() {
    return 10
}

//A função assync devolve uma promise e não simplismente o resultado 10, ou seja, é uma promise que será cumprida com o valor 10

console.log(getNumber())


// Para mostrar o resultado em si usamos o método then

getNumber().then((number) => {
    console.log(number)
})
