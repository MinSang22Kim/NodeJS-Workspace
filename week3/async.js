// async 함수를 일시 중지시키고 전달 된 Promise의 해결을 기다린 후 async 함수 계속 실행
async function foo() {
    await 1;
}

// 같은 뜻
// function foo() {
//     return Promise.resolve(1)
//         .then(() => undefined)
// }