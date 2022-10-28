let randomNumber1 = Math.floor(Math.random() * 6) + 1;
//console.log(randomNumber1);

let randomDiceImage = "dice" + randomNumber1 + ".png";
let randomImageSource = "images/" + randomDiceImage;

let leftPlayer = document.querySelector('img.left');
leftPlayer.setAttribute("src", randomImageSource);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomDiceImage2 = "dice" + randomNumber2 + ".png";
let randomImageSource2 = "images/" + randomDiceImage2;


let rightPlayer = document.querySelector('img.right');
rightPlayer.setAttribute("src", randomImageSource2);

let text = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
    text.innerHTML = "Player 1 Wins! &#128681"
} else if (randomNumber1 < randomNumber2) {
    text.innerHTML = "Player 2 Wins! &#128681"
} else {
    text.innerHTML = "Draw!"
}