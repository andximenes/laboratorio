"use strict"

const sales = [
    { id: 1, product: "Notebook", amount: 3500 },
    { id: 2, product: "Mouse", amount: 150 },
    { id: 3, product: "Teclado", amount: 250 },
    { id: 4, product: "Monitor", amount: 1200 }
]

const totalSales = sales.reduce((accumulator, sale) => {
    return accumulator + sale.amount
}, 0)

console.log(totalSales.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
}))

