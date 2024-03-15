const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url.startsWith('/src/')) {
        const filePath = path.join(__dirname, req.url);
        fs.readFile(filePath, (error, data) => {
            if (error) {
                res.writeHead(404);
                res.end(JSON.stringify(error));
                return;
            }

            let contentType = 'text/html';
            if (filePath.endsWith('.js')) {
                contentType = 'text/javascript';
            }

            if (filePath.endsWith('.css')) {
                contentType = 'text/css';
            }

            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data, 'utf-8');
        });
    } else {
        // HTMLファイルを返す
        fs.readFile('./src/index.html', 'utf-8', (error, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    }
});

server.listen(3000);
console.log('Server Start!');