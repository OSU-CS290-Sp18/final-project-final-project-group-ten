/*Server code for web page must run in client side.
  Default port listening: 3000

*/
var path=require('path');
var express=require('express');


var app=express();
var port=process.env.PORT || 3000;
var page=require('./weaponData');
var exphbs=require('express-handlebars');

/*request a mango db data set */
var bag="user data";

var MongoClient = require('mongodb').MongoClient;
/*
var mongoHost = process.env.MONGO_HOST;
var mongoPort = process.env.MONGO_PORT || '27017';
var mongoUsername = process.env.MONGO_USERNAME;
var mongoPassword = process.env.MONGO_PASSWORD;
var mongoDBName = process.env.MONGO_DB_NAME;

var mongoURL = "mongodb://" +
  mongoUsername + ":" + mongoPassword + "@" + mongoHost + ":" + mongoPort +
  "/" + mongoDBName;

var mongoDB = null;
*/


app.engine('handlebars',exphbs());
app.set('view engine','handlebars');

app.use(express.static('public'));

app.get('/',function(req,res,next){
  res.status(200).render('DealerPage',{Weapon:page});

});

app.post('/', function (req,res,next){

  console.log("====",req);
});

/*Function used to teturn and compose the
  Player's bag page.
*/
app.get('/playerBag', function (req,res,next){

  res.status(200).render('playerBag',{WeaponSell:page})
});

app.get('*', function(req,res){
  res.status(404).render('404Page');

});

app.listen(port,function(){

  console.log("==Server is listening  to port: ",port);
});
