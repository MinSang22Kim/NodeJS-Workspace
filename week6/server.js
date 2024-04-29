const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200,
        { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<h1>Heelo World!</h1>');
    res.end('<h2>End of response</h2>');
});

server.listen(8800, () => {
    console.log('8080 포트에서 서버 대기');
});
