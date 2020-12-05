var express = require('express');

var port = process.argv[2]

if (!port) {
  console.log('请指定端口号。例子如下\nnode server.js 8888')
  process.exit(1)
}

var app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.get('/db/*', (req, res) => {
  res.sendFile(__dirname + '/' + req.path);
});
app.get('/public/*', (req, res) => {
  res.sendFile(__dirname + '/' + req.path);
});

// app.use('/public', express.static('public'));
app.use((req, res) => {
  res.status(404);
  res.send('你访问的页面不存在');
});

var server = app.listen(port, () => {

  var host = server.address().address;
  var port = server.address().port;

  console.log("启动于 http://%s:%s", host, port);

})