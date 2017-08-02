/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to 
   write your logic.
*/

// hand = ["8", "A", "J"]

// hasAce = ["A"]
// noAce = ["8", "J"]

// hand = ["8", "j", "a"]

function ace(hand) {
  var hasAce = [];
  var noAce = [];
  for (let i = 0; i < hand.length; i++) {
    if (hand[i] === 'A') {
      hasAce.push(hand[i]);
    } else {
      noAce.push(hand[i]);
    }
  }
  return noAce.concat(hasAce);
}


function handValue(hand) {
  var valueOfHand = 0;

  hand = ace(hand);

  for (let i = 0; i < hand.length; i++) {
    switch (hand[i]) {
      case "J":
        valueOfHand += 10;
        break;
      case "Q":
        valueOfHand += 10;
        break;
      case "K":
        valueOfHand += 10;
        break;
      case "A":
        if (valueOfHand + 11 > 21) {
          valueOfHand += 1;
        } else {
          valueOfHand += 11;
        }
        break;
      default:
        valueOfHand += parseInt(hand[i]);
        break;
    }

  }
  return valueOfHand;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/