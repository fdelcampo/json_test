
var express = require('express');
var app = express();

app.use(express.bodyParser());

app.get('/', function(request, response){
	console.log(request.body);
 	response.send(request.body);
});

app.post('/', function(request, response){
  console.log(request.body);
  response.send(request.body);
});

app.put('/', function(request, response){
  console.log(request.body);
  response.send(request.body);
});

app.delete('/', function(request, response){
  console.log(request.body);
  response.send(request.body);
});


var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
