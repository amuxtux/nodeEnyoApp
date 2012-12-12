var port = 3000;

var express = require('express');
var app = module.exports = express.createServer();
/**
 * Configuration
 */
app.configure(function(){
  //app.set('views', __dirname + '/views');
  //app.set('view engine', 'ejs');
  //app.set('view options', {layout:false});
  app.use(express.bodyParser({uploadDir:'./uploads'}));
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/enyo'));

});

/**
 *  sets env for development mode
 */
app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

/**
 * It starts the server.
 */
app.listen(port);
console.log("server running on port ........ "+port);