"use strict"

const orders = [
    { id: 1, customer: "Ana", total: 500, status: "pending" },
    { id: 2, customer: "Carlos", total: 1800, status: "delivered" },
    { id: 3, customer: "Fernanda", total: 1500, status: "pending" },
    { id: 4, customer: "João", total: 2200, status: "pending" }
]

const priorityOrder = orders.find((order) => {
    return order.status === "pending" && order.total > 1000
})

if(priorityOrder === undefined) {
    console.log("order not found")
} else {
    console.log(priorityOrder)
}