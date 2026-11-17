"use strict"

console.log(dayjs())
console.log(dayjs().format())
console.log(dayjs('2019-01-25').format('DD/MM/YYYY'))

// USANDO VARIÁVEIS

const day = dayjs()
console.log(day.format("DD/MM/YYYY"))