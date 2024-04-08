const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'}); 
    res.end('<h1>Server 1</h1>');
}).listen(8080, () => { 
    console.log('8080 포트 시작');
});

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'}); 
    res.end('<h1>Server 2</h1>');
}).listen(8081, () => { 
    console.log('8081 포트 시작');
});