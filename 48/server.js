var express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.get('/public/*', (req, res) => {
  res.sendFile(__dirname + req.path);
});

app.use((req, res) => {
  res.status(404);
  res.send('你访问的页面不存在');
});

var server = app.listen(8888, () => {

  var host = server.address().address;
  var port = server.address().port;

  console.log("启动于 http://%s:%s", host, port);

})