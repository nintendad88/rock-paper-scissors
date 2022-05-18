function computerPlay(throws) {

    return throws[Math.floor(Math.random()*throws.length)];

}

const throws = ['Rock','Paper','Scissors'];

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'Rock' || computerSelection == 'Rock' || computerSelection == 'Scissors' || computerSelection == 'Paper') {
        alert( 'You won! Paper beats Rock!');
    }   
  }
  
  const playerSelection = prompt("Roshambo baby! Rock, Paper or Scissors??");
  const computerSelection = computerPlay(throws);
  console.log(playRound(playerSelection, computerSelection));
