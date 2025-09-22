const http = require('http');
const fs = require('fs');
const url = require('url');
const { start } = require('repl');
const mongoose = require('mongoose');


const myServer = http.createServer((req, res) => {
    if(req.url === '/favicon.ico') return res.end();
    const log = `${Date.now()}: ${req.method} ${req.url} New request received\n`
    const myUrl = url.parse(req.url, true);
    fs.appendFile('log.txt',log, (err, data)=> {
        switch(myUrl.pathname){
            case '/':
                if (req.method === 'GET')res.end('Homepage!');
                break;
            case '/about':
                const username = myUrl.query.myname; 
                res.end(`Hi ${username}, welcome to about page!`);
                break;
            case '/signup':
                if (req.method === 'GET') {
                    res.end('Signup page');
                }
                else if (req.method === 'POST') {
                    //DB QUERY
                    res.end('Form submitted');
                }
                break;
            default:
           res.end('404 not found!');
}
})
 console.log(req);
    
})

myServer.listen(3000, () => {
 console.log('Server is listening on port 3000');
});
