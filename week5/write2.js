async function f() {
    const fs = require('fs').promises;
    await fs.writeFile('./writefile.txt', 'Hello World');
    const data = await fs.readFile('./writefile.txt');
    console.log(data.toString());
}

f();