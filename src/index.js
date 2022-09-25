const Interest = require("./interest")

let interest = new Interest();

// interest.simpleInterest(1000, 5, 1.5)
const a = interest.simpleInterest(5, 5, 1)
console.log(a)

const b = interest.compoundInterest(10, 20, 30, 5)
console.log(b)

// interest.compoundInterest(1000, 5, 1.5, 12);