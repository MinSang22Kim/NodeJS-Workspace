// const { odd, even } = require('./var.mjs');
import { odd, even } from './var.mjs';

function checkOddOrEven(num) {
    if(num % 2) {
        return odd;
    }
    else {
        return even;
    }
}

// module.exports = checkOddOrEven;
export default checkOddOrEven;