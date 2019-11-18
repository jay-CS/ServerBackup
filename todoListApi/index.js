const express = require('express');
const app = express();

app.get('/',function(req,res) {
	console.log('GET REQUEST');
	res.end();
});


app.listen(process.env.port || 3000, function() {
	console.log('now listening for requests');
});
