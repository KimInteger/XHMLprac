const http = require('node:http');

const fs = require('node:fs');

const server = http.createServer((req,res)=>{
  if(req.method === 'GET'){
    if(req.url === '/'){
      fs.readFile('./public/index.html',(err,data)=>{
        if(err){
          res.writeHead(500,{"Content-Type":"text/plain;charset=UTF-8"});
          res.end("서버 연결 오류");
          return;
        } else {
          res.writeHead(200,{"Content-Type":"text/html; charset=UTF-8"});
          res.end(data);
        }
      });
    } else if (req.url === '/script.js') {
      fs.readFile('./public/script.js',(err,data)=>{
        if(err){
          res.writeHead(500,{"Content-Type":"text/plain;charset=UTF-8"});
          res.end("서버 연결 오류");
          return;
        } else {
          res.writeHead(200,{"Content-Type":"application/javascript; charset=UTF-8"});
          res.end(data);
        }
    });
    } else {
      res.writeHead(404,{"Content-Type":"text/plain;charset=UTF-8"});
      res.end("페이지를 찾을 수 없습니다.");
    }                 
  } else {
    res.writeHead(404,{"Content-Type":"text/plain;charset=UTF-8"});
    res.end("페이지를 찾을 수 없습니다.");
  }
});

server.listen(3000);