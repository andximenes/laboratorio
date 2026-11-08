

"use strict"

const orders = [
    { id: 1, customer: "Sarah", region: "Centro-Oeste", total: 200 },
    { id: 2, customer: "Carlos", region: "Sudeste", total: 350 },
    { id: 3, customer: "Fernanda", region: "Nordeste", total: 500 },
    { id: 4, customer: "João", region: "Centro-Oeste", total: 150 }
]

const ordersWithShipping = orders.map((order) => {
    let shipping = 0 
    let finalTotal = 0

    if (order.customer === "Fernanda"){
        shipping += 35
        finalTotal = order.total + shipping

    } else if (order.customer === "Carlos") {
        shipping += 25
        finalTotal = order.total + shipping
    } else {
        shipping += 15
        finalTotal = order.total + shipping
    }

    return {
        ...order,
        shipping,
        finalTotal
        
    }
})

console.log("original: ", orders)
console.log("Copy: ", ordersWithShipping)