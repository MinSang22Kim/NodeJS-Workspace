const fs = require('fs').promises;

fs.writeFile('./writefile.txt', '이 메시지가 입력됨')
    .then(() => {
        return fs.readFile('./writefile.txt');
    })
    .then((data) => {
        console.log(data.toString());
    })
    .catch((err) => {
        console.error(err);
    });