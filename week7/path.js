const path = require('path');

const p1 = path.join('/a', '/b', '..', 'abc.txt');
const p2 = path.resolve('/a', '/b', '..', 'abc.txt');
const p3 = path.extname('/dir/subdir/abc.txt');
const p4 = path.parse('/dir/subdir/abc.txt');
const p5 = path.format({dir: '/dir/subdir', ext: '.txt', name: 'abc'});
const p6 = path.normalize('/dir/////subdir///abc.txt');

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);
console.log(p5);
console.log(p6);