
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
var request1 = new XMLHttpRequest();

request.open('POST', 'playerBag');




//*********************************************************
//buy an item

var buy = document.getElementsByClassName('buy');

console.log(buy[0].parentNode.id);

var request = new XMLHttpRequest();

var WeaponName = 'unknown';

function Buy1 ()
{
    WeaponName = 'M4A1-GHOST';
    var requestBody = JSON.stringify({
          name: WeaponName,
        });

    request.setRequestHeader('Content-Type', 'application/json');
    request.send(requestBody);
    alert("Thank you for the purchase of an M4A1-GHOST!!");
}

function Buy2 ()
{
    WeaponName = 'MP5-GREEN';
    var requestBody = JSON.stringify({
          name: WeaponName,
        });

    request.setRequestHeader('Content-Type', 'application/json');
    request.send(requestBody);
    alert("Thank you for the purchase of an MP5-GREEN!!");
}

function Buy3 ()
{
    WeaponName = 'USP-GREEN';
    var requestBody = JSON.stringify({
          name: WeaponName,
        });

    request.setRequestHeader('Content-Type', 'application/json');
    request.send(requestBody);
    alert("Thank you for the purchase of an USP-GREEN!!");
}

function Buy4 ()
{
    WeaponName = 'ROCK';
    var requestBody = JSON.stringify({
          name: WeaponName,
        });

    request.setRequestHeader('Content-Type', 'application/json');
    request.send(requestBody);
    alert("Thank you for the purchase of an ROCK!!");
}

function Buy5()
{
    WeaponName = 'M4A1-BLUE';
    var requestBody = JSON.stringify({
          name: WeaponName,
        });

    request.setRequestHeader('Content-Type', 'application/json');
    request.send(requestBody);
    alert("Thank you for the purchase of an M4A1-BLUE!!");
}

function Buy6()
{
    WeaponName = 'SNIPER';
    var requestBody = JSON.stringify({
          name: WeaponName,
        });

    request.setRequestHeader('Content-Type', 'application/json');
    request.send(requestBody);
    alert("Thank you for the purchase of an SNIPER!!");
}

function Buy7 ()
{
    WeaponName = 'AK47-PINK';
    var requestBody = JSON.stringify({
          name: WeaponName,
        });

    request.setRequestHeader('Content-Type', 'application/json');
    request.send(requestBody);
    alert("Thank you for the purchase of an AK47-PINK!!");
}

function Buy8 ()
{
    WeaponName = 'PANTHER';
    var requestBody = JSON.stringify({
          name: WeaponName,
        });

    request.setRequestHeader('Content-Type', 'application/json');
    request.send(requestBody);
    alert("Thank you for the purchase of an PANTHER!!");
}

function Buy9 ()
{
    WeaponName = 'REAPER';
    var requestBody = JSON.stringify({
          name: WeaponName,
        });

    request.setRequestHeader('Content-Type', 'application/json');
    request.send(requestBody);
    alert("Thank you for the purchase of an REAPER!!");
}

function Buy10 ()
{
    WeaponName = 'RW';
    var requestBody = JSON.stringify({
          name: WeaponName,
        });

    request.setRequestHeader('Content-Type', 'application/json');
    request.send(requestBody);
    alert("Thank you for the purchase of an RW!!");
}

function Buy11 ()
{
    WeaponName = 'WIND';
    var requestBody = JSON.stringify({
          name: WeaponName,
        });

    request.setRequestHeader('Content-Type', 'application/json');
    request.send(requestBody);
    alert("Thank you for the purchase of an WIND!!");
}

function Buy12 ()
{
    WeaponName = 'EAGLE';
    var requestBody = JSON.stringify({
          name: WeaponName,
        });

    request.setRequestHeader('Content-Type', 'application/json');
    request.send(requestBody);
    alert("Thank you for the purchase of an EAGLE!!");
}

function Buy13 ()
{
    WeaponName = 'TIGER';
    var requestBody = JSON.stringify({
          name: WeaponName,
        });

    request.setRequestHeader('Content-Type', 'application/json');
    request.send(requestBody);
    alert("Thank you for the purchase of an TIGER!!");
}

function Buy14 ()
{
    WeaponName = 'HAMSTER';
    var requestBody = JSON.stringify({
          name: WeaponName,
        });

    request.setRequestHeader('Content-Type', 'application/json');
    request.send(requestBody);
    alert("Thank you for the purchase of an HAMSTER!!");
}




buy[0].addEventListener('click',Buy1);
buy[1].addEventListener('click',Buy2);
buy[2].addEventListener('click',Buy3);
buy[3].addEventListener('click',Buy4);
buy[4].addEventListener('click',Buy5);
buy[5].addEventListener('click',Buy6);
buy[6].addEventListener('click',Buy7);
buy[7].addEventListener('click',Buy8);
buy[8].addEventListener('click',Buy9);
buy[9].addEventListener('click',Buy10);
buy[10].addEventListener('click',Buy11);
buy[11].addEventListener('click',Buy12);
buy[12].addEventListener('click',Buy13);
buy[13].addEventListener('click',Buy14);


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
