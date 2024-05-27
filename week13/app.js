const express = require('express');
const app = express();
const port = 8080;

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/', (req, res) => {
    res.cookie('cookie1', 'abcd', { maxAge: 30000, path: '/', httpOnly: true });
    res.cookie('cookie2', '1234', { maxAge: 30000, path: '/', httpOnly: true });
    res.cookie('cookie3', '가나다라', { maxAge: 30000, path: '/', httpOnly: true });

    if (req.cookies) {
        console.log(req.cookies);
    } else {
        console.log('No cookies found');
    }
    
    res.send('Hello World');
});

app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

app.listen(port, () => {
    console.log(`${port}번 포트 대기중`);
});
