const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {

    const url = req.url ; 
    const method = req.method ;
    if(url === ('/')) {
        res.write('<html>');
        res.write('<head><title>My first page</title><head>');
        res.write('<body><form action="/message" method="POST"><input type ="text" name="message"><button>send</button></form</body>');
        res.write('</html>');
        return res.end(); // return terminates the rest of the function means that it will not continue executing line 14 .....
    }

    if (url === '/message' && method ==='POST') { 
        const body = [];
        req.on('data', (chunk)=>{
            console.log(chunk);
                body.push(chunk);
        });
        req.on('end', () => {
            const parsedbody = Buffer.concat(body).toString();
            const message = parsedbody.split('=')[1]
            fs.writeFileSync('message.txt', message); // creating a file name message.txt and writing dummy inside the file 
        })
        res.statusCode = 302;
        res.setHeader('Location','/'); // default header locate it in the '/' page
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title><head>');
    res.write('<body>hello</body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);