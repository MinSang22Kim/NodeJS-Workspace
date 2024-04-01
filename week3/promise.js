let condition = true;

new Promise((resolve, reject) => {
    if(condition) {
        resolve('성공');
    }
    else {
        reject('실패');
    }
})
    .then((message) => {
        console.log('성공 시 호출');
    })
    .catch((error) => {
        console.log('실패 시 호출');
    })
    .finally(() => {
        console.log('무조건 호출');
    });
