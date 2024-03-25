let condition = true;

function f() {
    console.log('호출');
}

function f2(resolve, reject){
    f();
    if(condition)
        resolve('성공');
    else
        reject('실패');
}

function success(msg){
    console.groupCollapsed(msg);
}

const p = new Promise(f2);

p.then(success).catch(failure);