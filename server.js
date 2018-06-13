/*Server code for web page must run in client side.
  Default port listening: 3000

*/
var path=require('path');
var express=require('express');
var bodyParser=require('body-parser');

var app=express();
var port=process.env.PORT || 3000;
var page=require('./weaponData');
var exphbs=require('express-handlebars');




var MongoClient = require('mongodb').MongoClient;
var mongoHost = process.env.MONGO_HOST;
var mongoPort = process.env.MONGO_PORT || '27017';
var mongoUsername = process.env.MONGO_USERNAME;
var mongoPassword = process.env.MONGO_PASSWORD;
var mongoDBName = process.env.MONGO_DB_NAME;

var mongoURL = "mongodb://" +
  mongoUsername + ":" + mongoPassword + "@" + mongoHost + ":" + mongoPort +
  "/" + mongoDBName;

var mongoDB = null;
/*request a mango db data set */
/*var Playerbag=mongoDB.collection('player');*/


app.engine('handlebars',exphbs());
app.set('view engine','handlebars');

app.use(express.static('public'));

app.get('/',function(req,res,next){
  res.status(200).render('DealerPage',{Weapon:page});

});

app.use(bodyParser.json());
/*
  monitor which used to pick up request sended from
  DealerPage and will sent weapon to data base.
*/
app.post('/', function (req,res,next){
  console.log("====",req.body.name);

  var name = req.body.name;
  var Collection = mongoDB.collection('player');  
  var a = Findweapon(Collection, name);             /*Figure out whether or not there has a weapon already exists in package */
  if(a === true)                                    /*If there is a weapon in our package, then count number + 1.*/
  {
    Collection.updateOne(
      {item: name },
      {$inc: {count}},
      function (err, result)
      {
        if(err)
        {
          res.status(500).send("Fail to update count!");
        }
        else
        {
          console.log("=== mongo insert result:", result);
          if(result.matchedCount > 0){
            res.status(200).end();
          }else{
            next();
          }
        }
      }
    );
  }
  else {                                           /*Else the weapon doesn't exist in databases.*/
    var New_weapon=weaponInfor(name);               /*Pull out information from json file which used to initialize the Delerpage*/
    Collection.insertOne({
      item: New_weapon.name,
      photoURL: New_weapon.photoURL,
      price: New_weapon.price,
      count: 1

    });
  }

});
/*
  Remove weapon when player going to sell it on playerBag page.
  Whe count>1 just get deduction on count,else if count===1 remove the 
  whole weapon from data base.
*/
app.post('/PlayerBag', function (req,res,next){
  var name=req.body.name;
  var Collection=mongoDB.collection('player');

  for(var i=0;i<Collection.length;i+=1){
    if(Collection[i].item===name){
      if(Collection[i].count===1){
        Collection.deleteOne({item:name});

      }
      else{
        Collection[i].count-=1;
      }
    }

  }


});


/*
  Function used to pull out information from jason file.
*/
function weaponInfor(name){
  for(var i=0;i<page.length;i++){
    if(page[i].name===name)
      return page[i];
  }

  console.log('No weapon matched s your choices');

}
/*
  Function used to determine whether or not here has a matched weapon in our databases.
*/

function Findweapon (Collection, name){
  for(var i=0;i<Collection.length;i+=1)
  {
    if(Collection[i].item === name)
    {
      return true;
    }
    else {
      return false;
    }
  }
}



/*Function used to teturn and compose the
  Player's bag page.
*/
app.get('/playerBag', function (req,res,next){
  var player=mongoDB.collection('player');
  var weaponcursor=player.find({});
  weaponcursor.toArray( function (err,weaponDocs){
    if(err){
      res.status(500).send("Failed for fetching weapon's data");
    }
    else{
      res.status(200).render('playerBag',{WeaponSell:weaponDocs})

    }

  });

});

app.get('*', function(req,res){
  res.status(404).render('404Page');

});

console.log(mongoURL);

MongoClient.connect(mongoURL, function (err,client){
  if (err){
    throw err;
  }
  mongoDB=client.db(mongoDBName);
  app.listen(port, function(){
    console.log("==server connected to mongoDB.")
  });

});