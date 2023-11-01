//const http = require('http');
import * as http from 'node:http'
import * as fs from "node:fs"
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
    console.log('URL:',req.url);
    console.log('METHOD:', req.method);
    
    if(req.url === '/'){

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        const buffer = fs.readFileSync('./temp/index.html')
        res.write(buffer)
        res.end();
        return
    }
    if (req.url === '/contacts'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        const buffer = fs.readFileSync('./temp/contacts.html')
        res.write(buffer)
        res.end();
        return
    }
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 | Page not found');
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});