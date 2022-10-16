"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interest_js_1 = require("./interest.js");
let interest = new interest_js_1.Interest();
const a = interest.simpleInterest(5, 5, 1);
console.log(a);
const b = interest.compoundInterest(10, 20, 30, 5);
console.log(b);
const c = 123;
