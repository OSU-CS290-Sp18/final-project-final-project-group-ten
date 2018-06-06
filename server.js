/*Server code for web page must run in client side.
  Default port listening: 3000

*/
var PORT=process.evn.PORT || 300;
var http=require("http");
var file=require('fs');





var server=http.createServer(handleRequest);

server.listen(PORT,function(err){
    console.log(err);
    console.log('==Server is listen to port: ',PORT);

});