const requestHandler = (req, res) =>{
    const url = req.url;
    const method = req.method;
    const users = ['Bob', 'Tom', 'Harry', 'Jerry'];
    if(url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Users</title></head>');
        res.write('<body><h1>Hello there!</h1>');
        res.write('<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Submit</button></body>')
        res.write('</html>');
        return res.end();
    }
    if(url === '/users'){
        res.write('<html>');
        res.write('<head><title>Users</title></head>');
        res.write('<body><h1>Our Users</h1>');
        res.write('<ul>');
        users.forEach(name => {
            res.write(`<li>${name}</li>`)
        });
        res.write('</ul></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/create-user' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () =>{
            const parsedBody = Buffer.concat(body).toString();
            let username = parsedBody.split('=')[1];
            console.log(username);
            users.push(username);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }
}

module.exports = requestHandler;
