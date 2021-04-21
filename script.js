var p1Choice
var p2Choice

let playerOneChoice = function (choice) {
  p1Choice = choice
}

let playerTwoChoice = function (choice) {
  p2Choice = choice
  if (
    (p1Choice === 's' && p2Choice === 'p') ||
    (p1Choice === 'p' && p2Choice === 'r') ||
    (p1Choice === 'r' && p2Choice === 's')
  ) {
    console.log('P1 wins')
    document.getElementById("text-winner").innerText = "Player 1 wins"
  }

  if (
    (p1Choice === 'p' && p2Choice === 's') ||
    (p1Choice === 'r' && p2Choice === 'p') ||
    (p1Choice === 's' && p2Choice === 'r')
  ) {
    console.log('P2 wins')
    document.getElementById("text-winner").innerText = "Player 2 wins"
  }

  if(p1Choice === p2Choice) {
      console.log("Nobody wins");
      document.getElementById("text-winner").innerText = "Nobody wins! :'(";
  }
};
