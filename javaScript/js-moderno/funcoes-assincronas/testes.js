"Use strict"

// SETTIMEOUT

// Mensagem atrasada
// Mostre "Processando..." imediatamente e, depois de 2 segundos, mostre "Concluído!"
console.log("Processando...")

setTimeout(() => {
    console.log("Concluído")
}, 2000)

// Confirmação de cadastro
// Ao chamar confirmRegistration("Mouse"), mostre "Mouse cadastrado!" depois de 1 segundo.
function confirmRegistration(productName) {
    setTimeout(() => {
        console.log(productName, "Cadastrado!")
    }, 1000)
}

confirmRegistration("Mouse")

// Cancelar um aviso
// Agende "Sessão expirada" para daqui a 3 segundos e cancele o aviso após 1 segundo.
const aviso = setTimeout(() => {
    console.log("Sessão expirada")
}, 3000)

setTimeout(() => {
    clearTimeout(aviso)
    console.log("Aviso cancelado")
}, 1000)


// SETINTERVAL

// Contador
// Aumente o contador a cada segundo e pare ao chegar em 5.
let count = 0

setInterval(() => {
    count += 1
    console.log(count)

    if (count === 5) {
        clearInterval(count)
    }
}, 1000)

// Contagem regressiva
// Mostre 3 imediatamente. Depois, mostre 2, 1 e "Fim!", com um segundo entre cada mensagem.
let regressiveCount = 4

const intervalo = setInterval(() => {
    regressiveCount -= 1
    console.log(regressiveCount)

    if (regressiveCount === 0) {
        clearInterval(intervalo)
    }
}, 1000)

// Verificação de estoque
// Diminua uma unidade por segundo. Quando chegar a zero, mostre "Esgotado" e pare.
let stock = 3

const simulationSold = setInterval(() => {
    stock -= 1
    console.log(stock, "venda realizada")

    if (stock === 0) {
        clearInterval(simulationSold)
        console.log("Stock esgotado")
    }
}, 1000)


// PROMISE

// Buscar um produto
// Retorne uma Promise que entrega o objeto do produto depois de 1 segundo.
function getProduct() {
    return new Promise((resolve, reject) => {
        const produto = {
            id: 1,
            name: "Notebook"
        }

        setTimeout(() => {
            if (produto) {
                resolve(produto)
            } else {
                reject("Nenhum produto encontrado")
            }
        }, 1000)
    })
}

getProduct().then((produto) => {
    console.log(produto)
})

// Reservar unidades
// Aceite quantidades de 1 a 5 e rejeite as demais. Teste com 3 e 8.
function reserveStock(quantity) {
    return new Promise((resolve, reject) => {
        let stockAvaliabe = 8

        setTimeout(() => {
            if (stockAvaliabe > 0 && stockAvaliabe <= 5) {
                resolve("Reserva confirmada")
            } else {
                reject("Quantidade indisponível")
            }
        }, 1000)
    })
}

reserveStock()
    .then((reserva) => {
        console.log(reserva)
    })
    .catch((error) => {
        console.log(error)
    })

// Encadear resultados
// Aplique 10% de desconto no primeiro .then() e mostre 90 no segundo.
function getPrice() {
    return Promise.resolve(100);
}

getPrice()
    .then((price) => {
        const discountedPrice = price * 0.9;
        return discountedPrice;
    })
    .then((finalPrice) => {
        console.log(finalPrice);
    });


// ASYNC E AWAIT

function getProduct() {
    return new Promise((resolve, reject) => {
        const produto = {
            id: 1,
            name: "Notebook"
        }

        setTimeout(() => {
            if (produto) {
                resolve(produto)
            } else {
                reject("Nenhum produto encontrado")
            }
        }, 3000)
    })
}

const showProduct = async () => {
    console.log("Carregando...");

    const produto = await getProduct();

    console.log(produto.name);
}

showProduct();

const fetch = async () => {
    try {
        console.log("Carregando...")

        const response = await getProduct()

        console.log("Success: ", response)
    } catch (error) {
        console.log(error)
    }
}

fetch()

// Aguardar duas operações em sequência
// Obtenha o pedido com o primeiro await e use o ID para confirmá-lo no segundo await.
function getOrder() {
    return new Promise((resolve) => {
        const product = { id: 1, name: "Mouse" }

        setTimeout(() => {
            resolve(product)
        }, 1000)
    })
}

function confirmOrder(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Pedido ${id} confirmado`)
        }, 1000)
    })
}

const processaPedido = async () => {
    const order = await getOrder()
    const confirmed = await confirmOrder(order.id)

    console.log("🔥", confirmed)
}

processaPedido()