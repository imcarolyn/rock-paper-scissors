
//randomly returns either "rock", "paper", or "scissors"
function computerPlay(){
  let randomResult = Math.random();
  if(randomResult < .33){
    return "Rock";
  } else if (randomResult < .66) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

//plays a round of rock,paper,scissors and declares the winner
function playRound(playerSelection, computerSelection){
  switch(playerSelection.toUpperCase()) {
    case "ROCK":
      switch(computerSelection.toUpperCase()){
        case "ROCK":
          return "Tie! You both chose rock";
          break;
        case "SCISSORS":
            return "You win! Rock beats scissors!";
            break;
        case "PAPER":
          return "You lose! Paper beats rock!";
          break;
      }
    case "PAPER":
      switch(computerSelection.toUpperCase()){
        case "ROCK":
          return "You win! Paper beats rock";
          break;
        case "SCISSORS":
            return "You lose! Scissors beat paper!";
            break;
        case "PAPER":
          return "Tie! You both chose paper!";
          break;
      }
    case "SCISSORS":
      switch(computerSelection.toUpperCase()){
        case "ROCK":
          return "You lose! Rock beats scissors";
          break;
        case "SCISSORS":
            return "Tie! You both chose scissors!";
            break;
        case "PAPER":
          return "You win! Scissors beats paper!";
          break;
      }
  }
}

//plays 5 rounds, storing scores and declaring winner at end
function game(){
  let playerScore = 0;
  let compScore = 0;
  for(let i=0; i<5; i++){
    let playerSelection = prompt("Rock, paper, or scissors?");
    let computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));

    if(playRound(playerSelection, computerSelection).match("win")){
      playerScore++;
    } else if (playRound(playerSelection, computerSelection).match("lose")){
      compScore++;
    }
  }
  
  console.log(`Final score is Player: ${playerScore} Computer: ${compScore}`);
  if(playerScore < compScore){
    console.log("You lose! Computer wins!");
  } else if (compScore > playerScore){
    console.log("Computer wins! You lose!");
  } else {
    console.log("Game was a tie!");
  }
}

