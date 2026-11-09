"use strict"

const accounts = [
    { number: 3001, owner: "Ana", balance: 1500, active: true },
    { number: 3002, owner: "Bruno", balance: 2200, active: false },
    { number: 3003, owner: "Carla", balance: 5000, active: true },
    { number: 3004, owner: "Daniel", balance: 800, active: true }
]

const activeAccount = accounts.find((account) => {
    return account.number === 3003 && account.active === true
})

if(activeAccount.active === undefined) {
    console.log("Count not found or inactive")
} else {
    console.log(activeAccount)
}



