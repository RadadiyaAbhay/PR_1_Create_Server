const http = require('http');
const port = 3000
const server = http.createServer((req, res) => {

    switch (req.url) {
        case "/":
            res.end("Welcome to Home Page");
            break;
        case "/about":
            res.end("Welcome to About Page");
            break;
        case "/contact":
            res.end("Welcome to Contact Page");
            break;
        case "/login":
            res.end("Welcome to Login Page");
            break;
        case "/signup":
            res.end("Welcome to Sign Up Page");
            break;
        default:
            res.end("No Routes Found!");
            break;
    }
})

server.listen(port, (() => {
    console.log(`Server is running at port ${port}`);
}))