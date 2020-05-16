var a = 1+ Math.random()*5;
  var player1 = Math.round(a);
document.querySelector("img").setAttribute("src","images/dice" + player1 + ".png");

var b = 1+ Math.random()*5;
  var player2 = Math.round(b);
document.querySelectorAll("img")[1].setAttribute("src","images/dice" + player2 + ".png");


if(player1>player2){
    document.querySelector("h1").textContent="🚩 Play 1 Wins!";
}else if(player1<player2){
    document.querySelector("h1").textContent="Player 2 Wins!🚩";
}else{
    document.querySelector("h1").textContent="Draw!";
}
