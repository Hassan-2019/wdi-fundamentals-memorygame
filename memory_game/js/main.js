
/*var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
console.log ("user flipped" + " " + cardOne);
console.log ("user flipped" + " " + cardThree);
*/
 var cards = ["queen", "queen", "king", "king" ];
 var cardsInPlay = [];
 
function checkForMatch {

if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}


}

  function flipCard(cardId) {

  	console.log("User flipped" + cards[cardId]);

 
 }
 
checkForMatch(1);