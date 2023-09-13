const http = require('http');

const hostname = '127.0.0.1';
const port = 8000;

const server = http.createServer(function (req, res) {
  const path = req.url;
  const method = req.method;
  // 임시로 products 라고 명명
  if (path === '/products') {
    if (method === 'GET') {
      //응답 보낼 때 타입을 JSON 객체로 헤더에 보냄
      res.writeHead(200, { 'Content-Type': 'application/json' });
      const products = JSON.stringify([
        {
          name: '베스트',
          brand: '세터',
          price: 30000,
        },
        {
          name: '데님 팬츠',
          brand: '미정',
          price: 10000,
        },
      ]);
      res.end(products);
    }
  }
  console.log(path);
  console.log(method);
  res.end('Hello Client');
});

server.listen(port, hostname);
console.log('중고장터 on-air!');
