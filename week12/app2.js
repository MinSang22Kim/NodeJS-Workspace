const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

app.use(express.urlencoded);

app.use((req, res, next) => {
    console.log(req,method);
    if(req.method == 'GET'){
        console.log(req.query);
    }
    if(req.method == 'POST'){
        console.log(req.body);
    }
    next();
});

// 서버 시작
app.listen(port, () => {
    console.log(`${port}번 포트 대기중`);
});

