#!/usr/bin/node
const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        console.log("Request Event")
        res.end(`<h1>Welcome to the Home Page</h1>`);
    };
    if(req.url === '/about') {
        res.end(`<h1>Welcome to the About Page</h1>`);
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We Can't Seem To Find The Page You Are Looking For</p>
        <a href="/"> Back Home</a>
    `)
});

server.listen(5000, () => {
    console.log('Server is listening on port 5000');
});
