const fs = require('fs').promises;

fs.writeFile('./writefile.txt', '이 메시지가 입력됨')
    .then((data) => {
        return fs.readFile('./writefile.txt');
    })
    .then((data) => {
        console.log(data.toString());
    })
    .catch((err) => {
        console.error(err);
    })

async function f() {
    const fs = require('fs').promises;
    await fs.writeFile('./writefile.txt', '이 메시지가 입력됨');
    const data = await fs.readFile('./writefile.txt');
    console.log(data.toString());
}

f();