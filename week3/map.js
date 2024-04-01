const m = new Map();

m.set('a', 1);
m.set(2, 'b');

const v = m.get(2);
console.log(v);

console.log(m.size);

for(const [k, v] of m) {
    console.log(k + ' : ' + v);
}

m.forEach((v, k) => {
    console.log(k + ' : ' + v);
});