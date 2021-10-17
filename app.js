const http = require('http')

const server = http.createServer((req , res) => {
    if(req.url === '/'){
        res.end('Home Page')
    }
    if(req.url === '/about'){
        res.end('About Page')
    }
    res.end(`
        <h1>Ooops!</h1>
        <p>we cannot serve your request</p>
    `)
})

server.listen(5000)