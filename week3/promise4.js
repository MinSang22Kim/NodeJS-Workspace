function f() {
    return new Promise((resolve, reject) => {
        resolve(1);
    });
}

async function af1() {
    console.log('af1');
    const r = await f();
    console.log(r);
    return 2;
}

async function af2() {
    console.log('af2');
    const r = await af1();
    console.log(r);
}