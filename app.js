const http = require('node:http');

const fs = require('node:fs');

const server = http.createServer((req,res)=>{
  if(req.method === 'GET'){

  } else {

  }
});

server.listen(3000);