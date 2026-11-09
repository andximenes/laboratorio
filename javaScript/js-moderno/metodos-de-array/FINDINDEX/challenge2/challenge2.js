"use strict" 

const reservations = [
    { id: 201, guest: "Ana", room: 101, status: "confirmed" },
    { id: 202, guest: "Carlos", room: 102, status: "pending" },
    { id: 203, guest: "Fernanda", room: 103, status: "confirmed" },
    { id: 204, guest: "João", room: 104, status: "pending" }
]

const statusReservation = reservations.findIndex((index) => {
    return index.status === "pending"
})


if(statusReservation === -1) {
    console.log("Index not found")
} else {
    console.log(`Name: ${reservations[statusReservation].guest} - index:  ${statusReservation}`)
}