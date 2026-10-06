let count = 0
let execute = true

console.log(execute)

while(execute) {
    let res = window.prompt("Deseja continuar 1 (Sim) ou 2 (Não)")
    res == 2 ? execute = false : execute
}

console.log(execute)