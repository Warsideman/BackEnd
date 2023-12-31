"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
//const http = require('http');
const http = __importStar(require("node:http"));
const fs = __importStar(require("node:fs"));
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
    console.log('URL:', req.url);
    console.log('METHOD:', req.method);
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        const buffer = fs.readFileSync('./temp/index.html');
        res.write(buffer);
        res.end();
        return;
    }
    if (req.url === '/contacts') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        const buffer = fs.readFileSync('./temp/contacts.html');
        res.write(buffer);
        res.end();
        return;
    }
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 | Page not found');
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
