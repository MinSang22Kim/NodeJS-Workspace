const fs = require('fs').promises;

fs.readFile('./textfile.txt')
    .then((data) => {
        console.log(data);
        console.log(data.toString());
    })
    .catch((err) => {
        console.error(err);
    });

// const fs = require('fs');
//     fs.readFile('./textfile.txt', (err, data) => {
//         if(err) {
//     throw err; }
//         console.log(data);
//         console.log(data.toString());
//     });