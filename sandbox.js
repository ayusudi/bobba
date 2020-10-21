console.log("Hello")
const bills = {
    date : new Date(),
    total : 0,
    tax : 0
}


bills.total = 100000
bills.tax = bills.total * 1/2

console.log(bills)