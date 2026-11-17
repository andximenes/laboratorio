"use strict"

let count = 0

const intervalId = setInterval(() =>{
    count += 1
    console.log(count)

    if(count === 10) {
        console.log("finsih")
        clearInterval(intervalId)
    }
}, 1000)