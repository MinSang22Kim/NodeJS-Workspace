const http = require('http');
const fs = require('fs').promises;
const cookie = require('cookie');
const querystring = require('querystring');
const path = require('path');

const session = {}; // 세션 정보를 저장할 객체

http.createServer(async (req, res) => {
    try {
        const reqUrl = req.url;

        if (req.method === 'POST') {
            let postdata = '';
            req.on('data', (data) => { postdata += data; });
            req.on('end', async () => {
                const name = querystring.parse(postdata).name;
                const now = new Date();
                const expires = new Date(now.getTime() + 10 * 60000); // 현재 시간에서 10분 뒤에 만료
                const sid = Date.now().toString(); // 현재 타임스탬프를 세션 ID로 사용

                session[sid] = {
                    name,
                    expires,
                    created: now,
                };

                console.log(`세션 생성됨: SID=${sid}, Name=${name}`);
                res.writeHead(302, { 'Location': '/', 'Set-Cookie': `sid=${sid}; Expires=${expires.toGMTString()}; HttpOnly; Path=/` });
                res.end();
            });
        } else if (req.headers.cookie) {
            const c = cookie.parse(req.headers.cookie);
            if (session[c.sid] && new Date() < new Date(session[c.sid].expires)) { // 세션 존재 및 만료 확인
                console.log(`세션 조회됨: SID=${c.sid}, Name=${session[c.sid].name}`);
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }); // 확실한 인코딩 설정
                res.end(`${session[c.sid].name}님 안녕하세요.`);
            } else {
                console.log(`세션 정보가 존재하지 않거나 만료됨: SID=${c.sid}`);
                res.end("세션 정보가 존재하지 않거나 만료되었습니다.");
            }
        } else {
            const data = await fs.readFile(path.join(__dirname, './nameForm.html'));
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(data);
        }
    } catch (error) {
        console.error(`서버 오류: ${error}`);
        res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end("서버 내부 오류가 발생했습니다.");
    }
}).listen(8080, () => {
    console.log('서버 시작됨 (8080번 포트)');
});
