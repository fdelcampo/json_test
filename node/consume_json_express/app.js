
var express = require('express');
var app = express();

//var url = require('url'),
//http = require('http'),
//qs = require('querystring');

app.use(express.bodyParser());
//app.use(express.json());
//app.use(express.urlencoded());

app.get('/', consume_get);
app.post('/', consume_post);


function consume_get(request, response){
	var url_params = url.parse(request.url,true);
	var query = url_params.query;
	
	response.writeHead(200);
	response.write( JSON.stringify( query ) );
	response.end();
	
}

function consume_post(request, response){
/*
	var body='';
    request.on('data', function (data) {
        body += data;
    });
    request.on('end',function(){

        var POST =  qs.parse(body);

        console.log(POST);
        
	response.writeHead( 200 );
        response.write( JSON.stringify( POST ) );
        response.end();        
    });
 */

 	console.log(JSON.stringify(request.body));
  	response.send(JSON.stringify(request.body));


	//response.send(request.body);
}

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
