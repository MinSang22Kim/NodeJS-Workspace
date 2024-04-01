const s = new Set();

s.add(10);
s.add(20);
s.add(30);

console.log(s.size);

for(const v of s) {
    console.log(v);
}

s.delete(20);

s.forEach((v) => {
    console.log(v);
});