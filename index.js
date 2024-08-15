//Player 1

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
 
var randomDiceImage = "dice" + randomNumber1 +".png";
var randomImageSource = "images/"+ randomDiceImage;

document.querySelector(".img1").setAttribute("src" , randomImageSource);

// Player 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

randomDiceImage = "dice" + randomNumber2 +".png";
randomImageSource = "images/"+ randomDiceImage;

document.querySelectorAll("img")[1].setAttribute("src" , randomImageSource);

//Player wins
if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="🥳Player 1 wins!";
}
else if(randomNumber2>randomNumber1)
{
    document.querySelector("h1").innerHTML="Player 2 wins!🥳";
}
else if(randomNumber1===randomNumber2)
{
    document.querySelector("h1").innerHTML="Draw!!";
}


