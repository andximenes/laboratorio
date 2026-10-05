let fruits = ["Apple", "Watermelon", "Strawberry"]
let position = fruits.indexOf("Watermelon")

console.log(fruits)

console.log(`this fruit "${fruits[position]}" is at position in the array`, position)

fruits.splice(position, 1)

console.log(fruits)

