import {Interest} from "./interest.js";

let interest = new Interest();

const a = interest.simpleInterest(5, 5, 1)
console.log(a)

const b = interest.compoundInterest(10, 20, 30, 5)
console.log(b)