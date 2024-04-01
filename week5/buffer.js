const buffer = Buffer.from('이 문자열을 이용하여 버퍼 생성');
console.log('from() : ', buffer);
console.log('length : ', buffer.length);
console.log('toStirng() : ', buffer.toString());

const array = [Buffer.from('ab'), Buffer.from('cd'), Buffer.from('ef')];
const buffer2 = Buffer.concat(array);
console.log('concat() : ', buffer2.toString());

const buffer3 = Buffer.alloc(5);
console.log('alloc() : ', buffer3);