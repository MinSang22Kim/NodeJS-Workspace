let a = 0;
a = 1; // 가능
console.log(a);

const b = 0;
// b = 1; // 불가능

const ar = [1, 2, 3];
ar[1] = 10;
console.log(ar);

const p = 1;
const q = 2;
const r = 3;
const s = p + " + " + q + " = " + (p + q);
console.log(s);

const obj = {
    name: 'Joe',
    age: '20',
    print: function () {
        console.log(this.name + ", " + this.age);
    },
    printSentence: function () {
        console.log(this.name + "는 " + this.age + "세 입니다!");
    }
}

obj.print();
obj.printSentence();