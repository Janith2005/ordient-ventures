const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
};

const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);

    // Parse URL to remove query strings
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
    let filePath = '.' + parsedUrl.pathname;

    // Default to index.html for root
    if (filePath === './') {
        filePath = './index.html';
    }

    // Get extension
    const extname = String(path.extname(filePath)).toLowerCase();

    // SPA Support: If no extension and not root, assume it's a client-side route and serve index.html
    // Exclude /css, /js, /assets directories to be safe, though checking extension is usually enough
    if (!extname && !req.url.startsWith('/css') && !req.url.startsWith('/js') && !req.url.startsWith('/Mayaakars-asserts')) {
        filePath = './index.html';
    }

    const contentType = MIME_TYPES[extname] || (filePath.endsWith('.html') ? 'text/html' : 'application/octet-stream');

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                // If specific file not found (e.g. image missing), return 404
                // But if we missed the SPA check above for some reason, we might want fallback?
                // For now, simple 404
                res.writeHead(404);
                res.end('File not found', 'utf-8');
            } else {
                res.writeHead(500);
                res.end('Server error: ' + error.code, 'utf-8');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
    console.log('Press Ctrl+C to stop');
});
