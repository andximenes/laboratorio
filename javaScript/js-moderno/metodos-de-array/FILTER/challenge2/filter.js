"use strict"

const orders = [
    { id: 101, customer: "Ana", status: "pending", total: 350 },
    { id: 102, customer: "Bruno", status: "delivered", total: 500 },
    { id: 103, customer: "Carlos", status: "pending", total: 150 },
    { id: 104, customer: "Daniela", status: "pending", total: 800 },
    { id: 105, customer: "Eduardo", status: "delivered", total: 100 }
]

const priorityOrders = orders.filter((order) => {
    const {status, total} = order

    return status === "pending" && total > 200
    
})

console.log(orders)
console.log(priorityOrders)