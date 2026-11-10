"use strict"

const payments = [
    { id: 1, customer: "Ana", paid: true },
    { id: 2, customer: "Carlos", paid: true },
    { id: 3, customer: "Fernanda", paid: false },
    { id: 4, customer: "João", paid: true }
]

const allPaymentsCompleted = payments.every((payment) => {
    return payment.paid === true

})

if(allPaymentsCompleted) {
    console.log("All payments completed")
} else {
    console.log("There are pending payments")
    
}