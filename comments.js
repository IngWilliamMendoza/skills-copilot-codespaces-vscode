// Create new server
var express = require('express');
var app = express();

// Create new server
app.get('/comments', function(req, res){
  res.send('This is a page for comments');
});

// Start server
app.listen(3000, function(){
  console.log('Server is running on port 3000');
});