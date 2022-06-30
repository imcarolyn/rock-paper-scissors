
let playerScore = 0;
let compScore = 0;
let roundCount = 0;
let finalScore;

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
          playerScore++;
          return "You win! Rock beats scissors!";
          break;
        case "PAPER":
          compScore++;
          return "You lose! Paper beats rock!";
          break;
      }
    case "PAPER":
      switch(computerSelection.toUpperCase()){
        case "ROCK":
          playerScore++;
          return "You win! Paper beats rock";
          break;
        case "SCISSORS":
          compScore++;
          return "You lose! Scissors beat paper!";
          break;
        case "PAPER":
          return "Tie! You both chose paper!";
          break;
      }
    case "SCISSORS":
      switch(computerSelection.toUpperCase()){
        case "ROCK":
          compScore++;
          return "You lose! Rock beats scissors";
          break;
        case "SCISSORS":
            return "Tie! You both chose scissors!";
            break;
        case "PAPER":
          playerScore++;
          return "You win! Scissors beats paper!";
          break;
      }
  }
}

function checkScore(){
  finalScore = `Final score is Player: ${playerScore} Computer: ${compScore} `;
  if(playerScore > compScore){
    finalScore += "Congratulations! You win!";
  } else if(compScore < playerScore) {
    finalScore += "Sorry! Better luck next time!";
  } else {
    finalScore += "It was a tie!";
  }
  playerScore = 0;
  compScore = 0;
  roundCount = 0;
}

const image = document.querySelector(".rps-image");
const results = document.querySelector(".results");
const score = document.querySelector(".score");
const finalText = document.querySelector(".final-score");

const rockButton = document.querySelector(".rock");
rockButton.addEventListener('click', () => {
  results.textContent = playRound("rock", computerPlay());
  score.textContent = `${playerScore} vs ${compScore}`;
  image.src="rock.png";
  roundCount++;
  finalText.textContent = `Round: ${roundCount}`;
  if(roundCount >= 5) {
    checkScore();
    finalText.textContent = finalScore;
    image.src="rock-paper-scissors.png"; }
  });

const paperButton = document.querySelector(".paper");
paperButton.addEventListener('click', () => {
  results.textContent = playRound("paper", computerPlay());
  score.textContent = `${playerScore} vs ${compScore}`; 
  image.src="paper.png";
  roundCount++;
  finalText.textContent = `Round: ${roundCount}`;
  if(roundCount >= 5) {
    checkScore();
    finalText.textContent = finalScore;
    image.src="rock-paper-scissors.png"; }
  });
  
const scissorsButton = document.querySelector(".scissors");
scissorsButton.addEventListener('click', () => {
  results.textContent = playRound("scissors", computerPlay());
  score.textContent = `${playerScore} vs ${compScore}`;
  image.src="scissors.png";
  roundCount++;
  finalText.textContent = `Round: ${roundCount}`;
  if(roundCount >= 5) {
    checkScore();
    finalText.textContent = finalScore;
    image.src="rock-paper-scissors.png"; }
  });