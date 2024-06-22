function getComputerChoice() {
  let computerChoice = Math.round(Math.random() * 2);
  
  switch (computerChoice) {
    case 0: return `rock`;
    case 1: return `paper`;
    case 2: return `scissors`
  }
}

function playGame(humanChoice) {
  let player = humanChoice;
  let computer = getComputerChoice();

  if (player === computer) {
    console.log(`Player: ${player} || Computer ${computer}\nIt's a tie!`);
  } else if (player === `rock` && computer === `scissors` || player === `scissors` && computer === `paper` || player === `paper` && computer === `rock`) {
    console.log(`Player: ${player} || Computer ${computer}\nPlayer Wins!`);
    humanScore++;
    scores.forEach((score) => {
      if (score.id === 'player') {
        console.log('HUMAN');
        score.textContent = humanScore;
      }
    });
  } else {
    console.log(`Player: ${player} || Computer ${computer}\nComputer Wins!`);
    computerScore++;
    scores.forEach((score) => {
      if (score.id === 'computer') {
        console.log('COMPUTER');
        score.textContent = computerScore;
      }
    });
  }
}

let humanScore = 0;
let computerScore = 0;

choice.forEach((item) => {
  item.addEventListener("click", () => {
    let humanChoice = item.id;
    playGame(humanChoice);
  });
});