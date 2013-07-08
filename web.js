var express = require('express');

var app = express.createServer(express.logger());

var fileName = 'index.html';

app.get('/', function(request, response) {
  response.send(readFromFile(fileName));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

var readFromFile(fileName)
{
    fs = require('fs');
    var bufferSize = 64;
    var buffer  = new  Buffer(bufferSizej);
    buffer = fs.readFileSync(fileName);
    return buffer.toString('utf-8');
}
