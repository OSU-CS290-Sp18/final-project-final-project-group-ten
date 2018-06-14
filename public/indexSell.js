var CloseButton = document.getElementsByClassName('close-modal');

function CloseModal ()
{
  var a = document.getElementsByClassName('hidden1');
  var b = document.getElementsByClassName('hidden2');
  var c = document.getElementsByClassName('hidden3');
  var clear1 = document.getElementById('enter-weapon-code');
  var clear2 = document.getElementsByClassName('enter-weapon-price');
  for(var j=0;j < a.length;j+=1)
  {
    a[j].style.display = 'none';
    b[j].style.display = 'none';
    c[j].style.display = 'none';
  }
  clear1.value = '';
  clear2[0].value = '';
  clear2[1].value ='';
}

CloseButton[0].addEventListener('click',CloseModal);
CloseButton[1].addEventListener('click',CloseModal);
CloseButton[2].addEventListener('click',CloseModal);

//*******************************************************

var CancelButton = document.getElementsByClassName('modal-cancel-button');

function CancelModal ()
{
  var a = document.getElementsByClassName('hidden1');
  var b = document.getElementsByClassName('hidden2');
  var c = document.getElementsByClassName('hidden3');
  var clear1 = document.getElementById('enter-weapon-code');
  var clear2 = document.getElementsByClassName('enter-weapon-price');
  for(var j=0;j < a.length;j+=1)
  {
    a[j].style.display = 'none';
    b[j].style.display = 'none';
    c[j].style.display = 'none';
  }
  clear1.value = '';
  clear2[0].value = '';
  clear2[1].value ='';
}

CancelButton[0].addEventListener('click',CancelModal);
CancelButton[1].addEventListener('click',CancelModal);
CancelButton[2].addEventListener('click',CancelModal);


//show the repository when clik the repository button
//*******************************************************
var repo = document.getElementById('repository');

function ShowRepoModule ()
{
  var show3 = document.getElementsByClassName('hidden3');
  for(var i=0;i<show3.length;i+=1)
  {
    show3[i].style.display = 'block';
  }
}

repo.addEventListener('click',ShowRepoModule);

//show the addcash modal when click the button
//********************************************************

var AddCash = document.getElementById('add-cash');

function ShowAddCashModule ()
{
  var show2 = document.getElementsByClassName('hidden2');
  for(var i=0;i<show2.length;i+=1)
  {
    show2[i].style.display = 'block';
  }

}

AddCash.addEventListener('click',ShowAddCashModule);

//show the sell button modal when click the button
//********************************************************

var Sell = document.getElementById('create-item-button');

function ShowCreateItem ()
{
  var show1 = document.getElementsByClassName('hidden1');
  for(var i=0;i<show1.length;i+=1)
  {
    show1[i].style.display = 'block';
  }
}

Sell.addEventListener('click',ShowCreateItem);


//********************************************************
//change cash amount
var confirm = document.getElementById('confirm');
var b = 2000;
function Add (){
var amount = document.getElementById('amount');
b = b + parseInt(amount.value);
var a = document.createTextNode('Cash: $'+ b);
var t = document.createElement("li");
t.appendChild(a);
t.classList.add("navitem");
t.classList.add("cash");
var c = document.getElementById('navlist');
c.replaceChild(t, c.childNodes[3]);
CloseModal();
}

confirm.addEventListener('click',Add);

//*********************************************************
//open check repo

var getRepo = document.getElementById('repo');

function CheckRepo ()
{
  window.location = '/playerBag';
}

getRepo.addEventListener('click', CheckRepo);

//*********************************************************
//buy an item



var weaponToSell = document.getElementsByClassName('sell');
  for(var i=0;i<weaponToSell.length;i+=1){
    // var item = weaponToSell[i].parentNode.id;
    adds(weaponToSell[i]);
  }


function adds (item) {
  item.addEventListener('click', function(){
    var weaponName = item.parentNode.id;
    var a = document.getElementById(weaponName);
    addMoney(weaponName);
    a.remove();
    console.log(weaponName);
    var request = new XMLHttpRequest();
    request.open('POST','');
    var requestBody = JSON.stringify({
          name: weaponName
        });
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(requestBody);


  });

}

function addMoney(weaponName)
{
  if(weaponName === "M4A1-GHOST")
  {
    b = b + 2500;
    var a = document.createTextNode('Cash: $'+ b);
    var t = document.createElement("li");
    t.appendChild(a);
    t.classList.add("navitem");
    t.classList.add("cash");
    var c = document.getElementById('navlist');
    c.replaceChild(t, c.childNodes[3]);
  }
  else if (weaponName === "MP5-GREEN")
  {
    b = b + 500;
    var a = document.createTextNode('Cash: $'+ b);
    var t = document.createElement("li");
    t.appendChild(a);
    t.classList.add("navitem");
    t.classList.add("cash");
    var c = document.getElementById('navlist');
    c.replaceChild(t, c.childNodes[3]);
  }
  else if (weaponName === "USP-GREEN")
  {
    b = b + 300;
    var a = document.createTextNode('Cash: $'+ b);
    var t = document.createElement("li");
    t.appendChild(a);
    t.classList.add("navitem");
    t.classList.add("cash");
    var c = document.getElementById('navlist');
    c.replaceChild(t, c.childNodes[3]);
  }
  else if (weaponName === "ROCK")
  {
    b = b + 600;
    var a = document.createTextNode('Cash: $'+ b);
    var t = document.createElement("li");
    t.appendChild(a);
    t.classList.add("navitem");
    t.classList.add("cash");
    var c = document.getElementById('navlist');
    c.replaceChild(t, c.childNodes[3]);
  }
  else if (weaponName === "M4A1-BLUE")
  {
    b = b + 1200;
    var a = document.createTextNode('Cash: $'+ b);
    var t = document.createElement("li");
    t.appendChild(a);
    t.classList.add("navitem");
    t.classList.add("cash");
    var c = document.getElementById('navlist');
    c.replaceChild(t, c.childNodes[3]);
  }
  else if (weaponName === "SNIPER")
  {
    b = b + 800;
    var a = document.createTextNode('Cash: $'+ b);
    var t = document.createElement("li");
    t.appendChild(a);
    t.classList.add("navitem");
    t.classList.add("cash");
    var c = document.getElementById('navlist');
    c.replaceChild(t, c.childNodes[3]);
  }
  else if (weaponName === "AK47-PINK")
  {
    b = b + 2500;
    var a = document.createTextNode('Cash: $'+ b);
    var t = document.createElement("li");
    t.appendChild(a);
    t.classList.add("navitem");
    t.classList.add("cash");
    var c = document.getElementById('navlist');
    c.replaceChild(t, c.childNodes[3]);
  }
  else if (weaponName === "PANTHER")
  {
    b = b + 700;
    var a = document.createTextNode('Cash: $'+ b);
    var t = document.createElement("li");
    t.appendChild(a);
    t.classList.add("navitem");
    t.classList.add("cash");
    var c = document.getElementById('navlist');
    c.replaceChild(t, c.childNodes[3]);
  }
  else if (weaponName === "REAPER")
  {
    b = b + 800;
    var a = document.createTextNode('Cash: $'+ b);
    var t = document.createElement("li");
    t.appendChild(a);
    t.classList.add("navitem");
    t.classList.add("cash");
    var c = document.getElementById('navlist');
    c.replaceChild(t, c.childNodes[3]);
  }
  else if (weaponName === "RW")
  {
    b = b + 1000;
    var a = document.createTextNode('Cash: $'+ b);
    var t = document.createElement("li");
    t.appendChild(a);
    t.classList.add("navitem");
    t.classList.add("cash");
    var c = document.getElementById('navlist');
    c.replaceChild(t, c.childNodes[3]);
  }
  else if (weaponName === "WIND")
  {
    b = b + 600;
    var a = document.createTextNode('Cash: $'+ b);
    var t = document.createElement("li");
    t.appendChild(a);
    t.classList.add("navitem");
    t.classList.add("cash");
    var c = document.getElementById('navlist');
    c.replaceChild(t, c.childNodes[3]);
  }
  else if (weaponName === "EAGLE")
  {
    b = b + 2000;
    var a = document.createTextNode('Cash: $'+ b);
    var t = document.createElement("li");
    t.appendChild(a);
    t.classList.add("navitem");
    t.classList.add("cash");
    var c = document.getElementById('navlist');
    c.replaceChild(t, c.childNodes[3]);
  }
  else if (weaponName === "TIGER")
  {
    b = b +700;
    var a = document.createTextNode('Cash: $'+ b);
    var t = document.createElement("li");
    t.appendChild(a);
    t.classList.add("navitem");
    t.classList.add("cash");
    var c = document.getElementById('navlist');
    c.replaceChild(t, c.childNodes[3]);
  }
  else if (weaponName === "HAMSTER")
  {
    b = b + 500;
    var a = document.createTextNode('Cash: $'+ b);
    var t = document.createElement("li");
    t.appendChild(a);
    t.classList.add("navitem");
    t.classList.add("cash");
    var c = document.getElementById('navlist');
    c.replaceChild(t, c.childNodes[3]);
  }
}


// for(var i=0;i<weaponToSell.length;i+=1){
//   var a = i;
//   weaponToSell[i].addEventListener('click', function (req,res)
//   {
//     console.log("=======sellWeapon function called");
//     console.log(weaponToSell.length);
//     console.log(a);
//
//   });
// }

//**********************************************************
//sell an item



//**********************************************************
//**********************************************************
//sell an item

// function insertNewPost(WeaponName, price, WeaponURL)
// {
//   var itemTemplate = Handlebars.templates.Weapon;
//
//   var itemHTML = itemTemplate({
//     name: WeaponName,
//     price: price,
//     photoURL: WeaponURL
//   });
//
//   var market = document.getElementsByClassName('market-place');
//
//   market[0].insertAdjacentHTML('beforeend', insertNewPost );
// }
//
//
//
// var WeaponURL = 'none';
//
// var WeaponName = 'Unknown';
//
// var price = document.getElementById('sell-price').value.trim();
//
// function MatchWeapon ()
// {
//   var WeaponCode = document.getElementById('enter-weapon-code').value.trim();
//
// console.log(WeaponCode);
//   if(WeaponCode == '1')
//   {
//     WeaponName = 'M4A1-GHOST';
//     WeaponURL = 'https://pbs.twimg.com/media/DevWivzU0AAMFMN.jpg';
//
//   }
//   else if(WeaponCode == '2')
//   {
//     WeaponName = 'MP5-GREEN';
//     WeaponURL = 'https://pbs.twimg.com/media/DevXd3FUwAECRbC.jpg';
//
//   }
//   else if(WeaponCode == '3')
//   {
//     WeaponName = 'USP-GREEN';
//     WeaponURL = 'https://pbs.twimg.com/media/DevXtJ8V4AAIeUw.jpg';
//
//   }
//   else if(WeaponCode == '4')
//   {
//     WeaponName = 'ROCK';
//     WeaponURL = 'https://pbs.twimg.com/media/DevX1scVMAEPUyO.jpg';
//
//   }
//   else if(WeaponCode == '5')
//   {
//     WeaponName = 'M4A1-BLUE';
//     WeaponURL = 'https://pbs.twimg.com/media/DevX-FLUwAEHvna.jpg';
//
//   }
//   else if(WeaponCode == '6')
//   {
//     WeaponName = 'SNIPER';
//     WeaponURL = 'https://pbs.twimg.com/media/DevYG7UUYAAGkON.jpg';
//
//   }
//   else if(WeaponCode == '7')
//   {
//     WeaponName = 'AK47-PINK';
//     WeaponURL = 'https://pbs.twimg.com/media/DevYzEjUEAEcSns.jpg';
//
//   }
//   else if(WeaponCode == '8')
//   {
//     WeaponName = 'PANTHER';
//     WeaponURL = 'https://pbs.twimg.com/media/DevZBH-UwAAlWG6.jpg';
//
//   }
//   else if(WeaponCode == '9')
//   {
//     WeaponName = 'REAPER';
//     WeaponURL = 'https://pbs.twimg.com/media/DevZKqOUYAAEFtE.jpg';
//
//   }
//   else if(WeaponCode == '10')
//   {
//     WeaponName = 'RW';
//     WeaponURL = 'https://pbs.twimg.com/media/DevZS3qUYAA4ZpY.jpg';
//
//   }
//   else if(WeaponCode == '11')
//   {
//     WeaponName = 'WIND';
//     WeaponURL = 'https://pbs.twimg.com/media/DevZdCxU0AANx61.jpg';
//
//   }
//   else if(WeaponCode == '12')
//   {
//     WeaponName = 'EAGLE';
//     WeaponURL = 'https://pbs.twimg.com/media/DevZmciVAAAE-b7.jpg';
//
//   }
//   else if(WeaponCode == '13')
//   {
//     WeaponName = 'TIGER';
//     WeaponURL = 'https://pbs.twimg.com/media/DevZuzjUYAE4xmM.jpg';
//
//   }
//   else if(WeaponCode == '14')
//   {
//     WeaponName = 'HAMSTER';
//     WeaponURL = 'https://pbs.twimg.com/media/DevZ4JTU0AAgr1k.jpg';
//
//   }
//   else{
//     alert("You entered a wrong weapon code!");
//   }
// }
//
// // function createPost ()
// // {
// //   var request2 = new XMLHttpRequest();
// //
// //   var requestBody = JSON.stringify({
// //     name: WeaponName,
// //     price: price,
// //     photoURL: WeaponURL
// //   });
// // }
//
// //***************************************************************
// //press create post button
//
// var createPostButton = document.getElementById('create-post');
//
//
// createPostButton.addEventListener('click', MatchWeapon);

