const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.set('views', './views');

let count = 0;

app.get('/', (req, res) => {
    count++;
    const array = ['item1', 'item2', 'item3', 'item4', 'item5']; // array 변수 정의
    res.render('main', { abc: 'kingkong', c: count, array: array }); // 렌더링
});

app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

app.listen(port, () => {
    console.log(`${port}번 포트 대기중`);
});
