const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

// JSON 형식 데이터 처리할 수 있게 설정
app.use(express.json());
//cors 이슈 막기 위해 사용
app.use(cors());

app.get('/products', async (req, res) => {
  const result = {
    prodcuts: [
      {
        id: 1,
        name: '베스트',
        brand: '세터',
        price: 30000,
      },
      {
        id: 2,
        name: '데님 팬츠',
        brand: '미정',
        price: 10000,
      },
    ],
  };
  res.send(result);
});

app.listen(port, () => {
  console.log('on-air');
});
