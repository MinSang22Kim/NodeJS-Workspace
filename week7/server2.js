const http = require('http');
const fs = require('fs').promises;
const path = require('path');

http.createServer(async (req, res) => {
    let head;

    // 파일의 확장자를 가져옵니다.
    const ext = path.extname(req.url);

    // 확장자에 따라 다른 처리를 수행합니다.
    if (ext === '.html') {
        // HTML 파일인 경우
        const data = await fs.readFile('./index.html');
        head = { 'Content-Type': 'text/html; charset=utf-8' };
        res.writeHead(200, head);
        res.end(data);
    } else if (ext === '.css') {
        // CSS 파일인 경우
        const data = await fs.readFile('./styles.css');
        head = { 'Content-Type': 'text/css' };
        res.writeHead(200, head);
        res.end(data);
    } else {
        // 해당 확장자에 대한 처리가 없는 경우 404 응답을 보냅니다.
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('Not Found');
    }

    // 로그를 출력합니다.
    console.log('Extension:', ext);
    console.log('Head:', head);

}).listen(8080, () => {
    console.log('Start server (8080)');
});
