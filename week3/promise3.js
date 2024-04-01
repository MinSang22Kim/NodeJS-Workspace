const p1 = Promise.resolve('성공1');
const p2 = Promise.resolve('성공2');
const p3 = Promise.resolve('성공3');

Promise.all([p1, p2, p3])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });