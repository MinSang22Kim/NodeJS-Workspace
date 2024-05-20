const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

app.use((req, res, next) => {
    const error = new Error('에러발생');
    error.status = 404;
    next(error);
});
app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(err.status || 404);
    res.send('에러 발생');
});
app.listen(port, () => {
    console.log(`${port}번 포트 대기중`);
});
