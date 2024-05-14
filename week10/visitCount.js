const http = require('http');
const cookie = require('cookie');

http.createServer(async (req, res) => {
    const reqUrl = req.url;
    console.log(req.headers.cookie);

    let visitCount = 1; // 클라이언트 방문 횟수

    if(req.headers.cookie){
        const cookies = cookie.parse(req.headers.cookie);
        console.log(cookies);
        if(cookies.visitCount){
            visitCount = parseInt(cookies.visitCount) + 1;
        }
    }

    res.writeHead(200, { 
        'Content-Type': 'text/html; charset=utf-8', 
        'Set-Cookie': `visitCount=${visitCount};`
    });
    res.write('방문횟수: ');
    res.end(visitCount.toString());
    
}).listen(8080, () => {
    console.log('Start server (8080)');
});
