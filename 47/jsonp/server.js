var express = require('express');
var fs = require('fs')

var app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.get('/friends.json', (req, res) => {
  res.sendFile(__dirname + '/friends.json');
});
app.get('/friends.js', (req, res) => {
  let str = fs.readFileSync('friends.js').toString()
  let json = fs.readFileSync('friends.json').toString()
  let random = req.query.callback
  str = str.replace('{{callback}}', random.toString())
    .replace(`'{{data}}'`, json)
  console.log(str)
  res.send(str);
});
app.get('/static/*', (req, res) => {
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

var ringoer = express();

ringoer.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

ringoer.use((req, res) => {
  res.status(404);
  res.send('你访问的页面不存在');
});

var serverringoer = ringoer.listen(9999, () => {

  var host = serverringoer.address().address;
  var port = serverringoer.address().port;

  console.log("启动于 http://%s:%s", host, port);

})