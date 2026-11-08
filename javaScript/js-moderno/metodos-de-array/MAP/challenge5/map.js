"use strict"

const accounts = [
    { 
        id: 1, 
        owner: "Ana", 
        balance: 1500, 
        transaction: { 
            type: "deposit", 
            amount: 500 
        } 
    },
    { id: 2, owner: "Bruno", balance: 2000, transaction: { type: "withdraw", amount: 300 } },
    { id: 3, owner: "Carla", balance: 800, transaction: { type: "deposit", amount: 200 } },
    { id: 4, owner: "Daniel", balance: 1200, transaction: { type: "withdraw", amount: 400 } }
]

const updatedAccounts = accounts.map((account) => {
    const { type, amount} = account.transaction
    
    const balance = type === "deposit"
    ? account.balance + amount
    : account.balance - amount

    return {
        ...account, 
        balance  
    }
})

console.log(accounts)
console.log(updatedAccounts)