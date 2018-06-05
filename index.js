
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

var AddCash = document.getElementsByClassName('cash');
