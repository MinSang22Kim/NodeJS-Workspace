console.log(this);
console.log(this === module.exports);
console.log(this === exports);

function f() {
    console.log('function', this === exports, this === global);
}

f();