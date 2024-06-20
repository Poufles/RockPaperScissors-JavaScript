function getComputerChoice() {
  let computer = Math.ceil(Math.random() * 2);
  switch (computer) {
    case 0:
      computer = `rock`;
      break;
    case 1:
      computer = `paper`;
      break;
    case 2:
      computer = `scissors`;
      break;
  }

  return computer;
}

function getHumanChoice() {
  let response = prompt(`Rock || Paper || Scissors: `);
  return response.toLowerCase();
}

function playRound(player, computer) {
  if (player == computer) {
    alert(`Player: ${player}\nComputer: ${computer}\n=========\nIt is a draw!`);
    humanScore++;
    computerScore++;
  } else if (player == `rock` && computer == `scissors`) {
    alert(`Player: ${player}\nComputer: ${computer}\n=========\nPlayer wins!`);
    humanScore++;
  } else if (player == `rock` && computer == `paper`) {
    alert(
      `Player: ${player}\nComputer: ${computer}\n=========\nComputer wins!`
    );
    computerScore++;
  } else if (player == `paper` && computer == `rock`) {
    alert(`Player: ${player}\nComputer: ${computer}\n=========\nPlayer wins!`);
    humanScore++;
  } else if (player == `paper` && computer == `scissors`) {
    alert(
      `Player: ${player}\nComputer: ${computer}\n=========\nComputer wins!`
    );
    computerScore++;
  } else if (player == `scissors` && computer == `paper`) {
    alert(`Player: ${player}\nComputer: ${computer}\n=========\nPlayer wins!`);
    humanScore++;
  } else if (player == `scissors` && computer == `rock`) {
    alert(
      `Player: ${player}\nComputer: ${computer}\n=========\nComputer wins!`
    );
    computerScore++;
  }
}

function playGame() {
  let playerResponse;
  let computerResponse;
  let round = 5;

  while (humanScore != round && computerScore != round) {
    playerResponse = getHumanChoice();
    computerResponse = getComputerChoice();
    if (responseChecker(playerResponse)) {
      playRound(playerResponse, computerResponse);
      alert(
        `Scores\n=========\nPlayer: ${humanScore}\nComputer: ${computerScore}`
      );
    } else {
      alert("Please type a correct choice.");
    }
  }
}

function responseChecker(response) {
  let correct_Response = [`rock`, `paper`, `scissors`];
  if (correct_Response.includes(response)) {
    return true;
  } else {
    return false;
  }
}

let humanScore = 0;
let computerScore = 0;
playGame();
