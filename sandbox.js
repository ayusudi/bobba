console.log("Hello")
console.log("Hello 1")
if (true) {
    console.log("Hello FITUR CREATE DRINK")
}

let array= [
    'bobba', 'ice', 'tea'
]
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}
const bills = {
    date : new Date(),
    total : 0,
    tax : 0
}


bills.total = 100000
bills.tax = bills.total * 1/2

console.log(bills)
