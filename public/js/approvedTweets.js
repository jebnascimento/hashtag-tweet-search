function tweetWall()
{
  let tweetsWall = '<div class="row">';
  var cardsApproved = document.getElementsByClassName("approved");
  for(let index = 0; index < cardsApproved.length; index++)
  {
    tweetsWall += '<div class="col-sm-4"><div class="card rounded-4 mr-3 ml-3 mb-3">' +
    '<div class="card-body" onclick="approved(this)">' + cardsApproved[index].innerHTML +
    '</div>' +
    '</div>' +
    '</div>';
  }
  tweetsWall += '</div>';
  document.getElementById('tweets').innerHTML = tweetsWall;

};
button.onclick = tweetWall;