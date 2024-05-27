const express = require('express');
const app = express();
const port = 8080;

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/', (req, res) => {
    req.secret = 'secret';
    res.cookie('signedCookie1', 'secretValue', { httpOnly: true, signed: true });

    if (req.cookies) {
        console.log(req.cookies);
        console.log(req.signedCookies);
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