"use strict"

const orders = [
    { id: 101, customer: "Ana", total: 250, status: "paid" },
    { id: 102, customer: "Bruno", total: 180, status: "pending" },
    { id: 103, customer: "Carlos", total: 420, status: "paid" },
    { id: 104, customer: "Fernanda", total: 300, status: "pending" },
    { id: 105, customer: "João", total: 150, status: "paid" }
]

const totalPaid = orders.reduce((accumulator, order) => {
    return order.status === "paid" ? accumulator + order.total : accumulator
    
}, 0)

console.log(totalPaid.toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL"
}))