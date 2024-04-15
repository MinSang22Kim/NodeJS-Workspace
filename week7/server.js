const http = require('http');
const fs = require('fs').promises;
const url = require('url');
const querystring = require('querystring');

http.createServer(async (req, res) => {
    console.log(req.method);
    console.log(req.url);

    const parsedUrl = url.parse(req.url);
    console.log(parsedUrl);
    // const parsedQuery = querystring.parse(parsedUrl.query); // 'parsedUrl'을 사용하여 쿼리 파싱
    // console.log(parsedQuery);

    if (parsedUrl.pathname === '/') {
        const data = await fs.readFile('./nodejs.png');
        res.writeHead(200, {'Content-Type': 'image/png; charset=utf-8'});
        res.end(data);

        // const data = await fs.readFile('./index.html');
        // res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        // res.end(data);
    } else if (parsedUrl.pathname === '/about.html') {
        const data = await fs.readFile('./week7/about.html');
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(data);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        return res.end('Not found');
    }

    // POST 요청의 데이터를 처리하는 부분
    if (req.method === 'POST') {
        let postdata = '';
        req.on('data', (chunk) => {
            postdata += chunk;
        });
        req.on('end', () => {
            console.log(postdata);
            const parsedData = querystring.parse(postdata);
            console.log(parsedData);
        });
    }
}).listen(8080, () => {
    console.log('Start server (8080)');
});
