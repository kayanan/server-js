const http= require('http');
const port=5000 ;
const app=require('./app.js');

const server=http.createServer(app);

server.listen(port);