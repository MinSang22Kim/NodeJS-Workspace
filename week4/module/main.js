//const { odd, even } = require('./var.js');
import { odd, even } from './var.mjs';
// const checkNumber = require('./func.js');
import checkNumber from './func.mjs';

function checkStringOddOrEven(str) {
    if(str.length % 2) {
        return odd;
    }
    else {
        return even;
    }
}

console.log(checkNumber(10));
console.groupCollapsed(checkStringOddOrEven('hello'));