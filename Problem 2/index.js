const http = require('http');
const GCF = require('../Problem 1/GCF');

const requestListener = async (req, res) => {
    res.setHeader('Content-Type', 'text/plain')
    res.status(200);
    res.end();
};

const PORT = 3000;

const server = new http.createServer(requestListener)

server.listen(PORT, err => {
    if(err) {
        console.log(err);
    } else  {
        console.log(`Server running at PORT ${PORT}`);
        let data = GCF.function(15,20);
        console.log(data);
    }
});