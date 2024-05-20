const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

// 'GET /' 에 대한 응답
app.get('/', (req, res) => {
  res.send('Hello World');
});

// 'POST /' 에 대한 응답
app.post('/', (req, res) => {
  res.send('Got a POST request');
});

// 'PUT /user' 에 대한 응답
app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user');
});

// 'DELETE /user' 에 대한 응답
app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user');
});

app.listen(port, () => {
    console.log(`${port}번 포트 대기중`);
});
