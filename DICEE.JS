var randomNumber1 = Math.floor(Math.random()*6) + 1;

var randomImage1 = "dice" + randomNumber1 + ".png";

var randomSource1 = "images/" + randomImage1;

document.querySelectorAll("img")[0].setAttribute("src", randomSource1); 



var randomNumber2 = Math.floor(Math.random()*6) + 1;

var randomImage2 = "dice" + randomNumber2 + ".png";

var randomSource2 = "images/" + randomImage2;

document.querySelectorAll("img")[1].setAttribute("src", randomSource2);



if(randomImage1>randomImage2){
  document.querySelector("h1").innerHTML="Player 1 wins!";
}
else if(randomImage1<randomImage2){
  document.querySelector("h1").innerHTML="Player 2 wins!";
}
else{
  document.querySelector("h1").innerHTML="Draw!";
}