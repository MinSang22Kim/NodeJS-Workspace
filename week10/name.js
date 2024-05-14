const http = require('http');
const fs = require('fs').promises;
const url = require('url');
const querystring = require('querystring');
const path = require('path');

const cookie = require('cookie');
const session = {}; // 세션 정보를 저장할 객체
//const c = cookie.parse(req.headers.cookie);

http.createServer(async (req, res) => {
    const reqUrl = req.url;

    if (req.method === 'POST') {
        let postdata = '';
        req.on('data', (data) => { postdata += data; });
        return req.on('end', async () => {
            const name = querystring.parse(postdata).name;
            console.log(name);

            const expires = new Date();
            expires.setMinutes(expires.getMinutes() + 10); // 현재 시간에서 10분 뒤에 만료
            // const sid = new Date();
            const sid = Date.now().toString(); // sid를 문자열로 변환
            
            session[sid] = {
                name,
                expires,
            };
            res.writeHead(302, { 'Location': '/', 'Set-Cookie': `sid=${sid}; Expires=${expires.toGMTString()}; HttpOnly; Path=/` });
            return res.end();
        });
    } else {
        if (req.headers.cookie != undefined) {
            const c = cookie.parse(req.headers.cookie);
            console.log(`세션 조회됨: SID=${c.sid}, Name=${session[c.sid].name}`); // 세션 접근 시 세션 ID와 이름을 로그로 출력
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }); // 확실한 인코딩 설정
            res.end(`${session[c.sid].name}님 안녕하세요.`);
        } else {
            const data = await fs.readFile(path.join(__dirname, './nameForm.html'));
            console.log(`현재 세션들: ${JSON.stringify(session)}`); // 현재 모든 세션을 로그로 출력

            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            return res.end(data);
        }
    }
}).listen(8080, () => {
    console.log('Start server (8080)');
});