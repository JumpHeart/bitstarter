var express = require('express');

var app = express.createServer(express.logger());

var fName = 'index.html';

app.get('/', function(request, response) {
  response.send(readFromFile(fName));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

function readFromFile(fileName)
{
    fs = require('fs');
    var bufferSize = 64;
    var buffer  = new  Buffer(bufferSize);
    buffer = fs.readFileSync(fileName);
    return buffer.toString('utf-8');
}

if (require.main == module )
{
    console.log(readFromFile(fName));
}
