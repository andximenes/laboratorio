"use strict"

const documents = [
    {
        id: 1,
        name: "Identification",
        status: "approved",
        uploaded: true
    },
    {
        id: 2,
        name: "Proof of Address",
        status: "approved",
        uploaded: true
    },
    {
        id: 3,
        name: "Contract",
        status: "pending",
        uploaded: true
    },
    {
        id: 4,
        name: "Declaration",
        status: "approved",
        uploaded: true
    }
]

const allDocumentsValid = documents.every((document) => {
    return document.uploaded === true && document.status === "approved" 
})

console.log(allDocumentsValid)