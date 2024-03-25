const obj = {
    a: 10,
    b: 'Hello',
    c: {
        ca: 100,
        cb: {
            cba: 1000,
        },
    },
}

console.log(obj);
console.dir(obj, { colors: false, depth: 1});
console.dir(obj, { colors: false, depth: 0});