const express = require('express');
const app = express();
const port = 8080;

const cookieParser = require('cookie-parser');
const session = require('express-session');
const MemoryStore = require('memorystore')(session);

app.use(cookieParser());

app.use(session({
    secret: '비밀키',
    resave: false,
    saveUninitialized: true,
    store: new MemoryStore({
        checkPeriod: 60000,
    }),
    cookie: { maxAge: 60000 },
}));

app.get('/', (req, res) => {
    res.cookie('cookie1', 'abcd', { maxAge: 30000, path: '/', httpOnly: true });
    res.cookie('cookie2', '1234', { maxAge: 30000, path: '/', httpOnly: true });
    res.cookie('cookie3', '가나다라', { maxAge: 30000, path: '/', httpOnly: true });

    if (req.cookies) {
        console.log(req.cookies);
    } else {
        console.log('No cookies found');
    }

    // 세션 변수 초기화 및 증가
    if (!req.session.num) {
        req.session.num = 0;
    }
    req.session.num++;
    console.log(req.session);

    res.send('Hello World');
});

app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

app.listen(port, () => {
    console.log(`${port}번 포트 대기중`);
});
