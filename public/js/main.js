var cards = document.getElementsByClassName("card-body");

function approved(elem) {
  if(elem.classList.contains('approved'))
  {
    elem.classList.remove('approved');
  }
  else{
    elem.classList.add('approved');
  }
}

