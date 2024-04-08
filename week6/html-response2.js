const http = require('http');
const fs = require('fs').promises;

http.createServer(async (req, res) => {
    let filename = null;

    if (req.url === '/') {
        filename = './index.html';
    } else if (req.url == 'week6/about.html') {
        filename = './about.html';
    } else {
        res.writeHeader(404, { 'Content-Type': 'text/html; charset=utf-8' });
        return res.end('Not found');
    }
    try {
        const data = await fs.readFile(filename);
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        return res.end(data);
    } catch (err) {
        console.error(err);
        res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
        return res.end(err.message);
    }
}).listen(8080, () => {
    console.log('Start server (8080)');
});