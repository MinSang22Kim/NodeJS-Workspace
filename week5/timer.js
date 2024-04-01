const t1 = setTimeout(() => {
    console.log('2초 후 실행');
}, 2000);

setImmediate(() => {
    console.log('Immediate');
});

const t2 = setImmediate(() => {
    console.log('즉시 실행');
}, 1000);

const t3 = setInterval(() => {
    console.log("1초마다 실행");
}, 1000);

const t4 = setTimeout(() => {
    console.log('타이머 종료');
    clearInterval(t3);
}, 5000)