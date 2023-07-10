const fs = require('fs');

const requestHandler = (req,res) => {
    const url = req.url;
    const method = req.method;
    if(url === ('/')) {
        res.write('<html>');
        res.write('<head><title>My first page</title><head>');
        res.write('<body><form action="/message" method="POST"><input type ="text" name="message"><button>send</button></form</body>');
        res.write('</html>');
        return res.end(); // return terminates the rest of the function means that it will not continue executing line 14 .....
    }
    
    if (url === '/message' && method ==='POST') { 
        const body = []; //creating a variable called body
        req.on('data', (chunk)=>{ // requesting an event listner linking it to the (chunk) variable
            console.log(chunk); 
                body.push(chunk); //pushing chunk(data) to body
        });
        return req.on('end', () => { // we added return here so it can execute this request 
            const parsedbody = Buffer.concat(body).toString(); // bus stop buffers and than changing body aka data to a string type
            const message = parsedbody.split('=')[1]
            fs.writeFile('message.txt', message, (err)=>{
                res.statusCode = 302;
                res.setHeader('Location','/'); // default header locate it in the '/' page
                return res.end();// these 2 requests (event listeners req.on ....) will not be executed because nodejs registres these type of requests to be executed in later times *named also callback*
                // now if we launched the server it will immidiatly jump these resquets an execute the line bellow which will cuase problem because at the end it will turn back to these callbacks and try executing them which is not doable in this situation 
            }); 
            // creating a file name message.txt and writing a message inside the file and than giving an error if something went wrong that's the third argument (err()=>{})
           
        });
        }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title><head>');
    res.write('<body>hello</body>');
    res.write('</html>');
    res.end();
};

module.exports = requestHandler;