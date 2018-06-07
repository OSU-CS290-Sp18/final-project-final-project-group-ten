/*Server code for web page must run in client side.
  Default port listening: 3000

*/
var path=require('path');
var express=require('express');


var app=express();
var port=process.env.PORT || 3000;
var page=require('./weaponData');
var exphbs=require('express-handlebars');

app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine','handlebars');

app.use(express.static('public'));
app.get('/',function(req,res,next){
  res.status(200).render('DealerPage',);

});