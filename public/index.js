
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

//********************************************************
//change cash amount
var confirm = document.getElementById('confirm');

function Add (){
var amount = document.getElementById('amount');
var b = parseInt(amount.value) + 2000;
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
