"use strict"

function assyncFunction() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const isSuccess = true

            if(isSuccess) {

                resolve("A operação foi concluída com sucesso")

            } else {

                reject("Algo deu errado")
            }

        }, 3000)

    })  
}

assyncFunction().then((response) => {

    console.log("Sucesso: ", response)

}).catch((error) => {

    console.log("Error: ", error)

}).finally(() => {
    console.log("Fim da execução")
})