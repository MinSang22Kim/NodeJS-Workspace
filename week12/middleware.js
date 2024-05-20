const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

// 모든 경로에 대해서 실행
app.use((req, res, next) => {
    console.log('모든 경로에 대한 미들웨어');
    next(); // next() 안넣으면 요청이 끝나버림!! 꼭 넣어줘야 함
});
// /abc 경로에 대해서 실행
app.use('/', (req, res, next) => {
    console.log('루트 경로에 대한 미들웨어');
    next(); // use인 미들웨어는 해당 경로를 포함하는 모든 곳에서 실행됨
});
// 'GET /abc' 에 대한 응답
app.get('/abc', function (req, res) {
    res.send('/abc 경로 응답'); // localhost:8080/abc를 요청해도 위에꺼 2개 출력됨
});
// 'GET /' 에 대한 응답
app.get('/', function (req, res) {
    res.send('/ 경로 응답');
});
app.listen(port, () => {
    console.log(`${port}번 포트 대기중`);
});