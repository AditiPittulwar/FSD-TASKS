const cells = document.querySelectorAll("[data-cell]");
const resultText = document.getElementById("resultText");
const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");
const timeDisplay = document.getElementById("time");

let currentPlayer = "X";
let gameActive = false;
let timer;
let seconds = 0, minutes = 0, hours = 0;

// Winning combinations
const winningCombos = [
  [0,1,2],[3,4,5],[6,7,8], // rows
  [0,3,6],[1,4,7],[2,5,8], // columns
  [0,4,8],[2,4,6]           // diagonals
];

// Start game
startBtn.addEventListener("click", () => {
  resetBoard();
  gameActive = true;
  currentPlayer = "X";
  resultText.textContent = "Game Started! Player X's turn";

  // reset timer
  clearInterval(timer);
  seconds = minutes = hours = 0;
  timeDisplay.textContent = "00:00:00";
  timer = setInterval(updateClock, 1000);
});

// Restart game
restartBtn.addEventListener("click", () => {
  resetBoard();
  gameActive = true;
  currentPlayer = "X";
  resultText.textContent = "Game Restarted! Player X's turn";

  // reset timer
  clearInterval(timer);
  seconds = minutes = hours = 0;
  timeDisplay.textContent = "00:00:00";
  timer = setInterval(updateClock, 1000);
});

// Cell click
cells.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    if (!gameActive || cell.textContent !== "") return;

    cell.textContent = currentPlayer;
    cell.classList.add("taken");

    if (checkWinner(currentPlayer)) {
      resultText.textContent = `🎉 Player ${currentPlayer} Wins!`;
      gameActive = false;
      clearInterval(timer);
      return;
    }

    if (isDraw()) {
      resultText.textContent = " It's a Draw!";
      gameActive = false;
      clearInterval(timer);
      return;
    }

    // Switch player
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    resultText.textContent = `Player ${currentPlayer}'s turn`;
  });
});

// Reset board
function resetBoard() {
  cells.forEach(cell => {
    cell.textContent = "";
    cell.classList.remove("taken");
  });
}

// Check winner
function checkWinner(player) {
  return winningCombos.some(combo => {
    return combo.every(index => cells[index].textContent === player);
  });
}

// Check draw
function isDraw() {
  return [...cells].every(cell => cell.textContent !== "");
}

// Timer function
function updateClock() {
  seconds++;
  if (seconds === 60) { seconds = 0; minutes++; }
  if (minutes === 60) { minutes = 0; hours++; }

  let h = hours.toString().padStart(2, "0");
  let m = minutes.toString().padStart(2, "0");
  let s = seconds.toString().padStart(2, "0");
  timeDisplay.textContent = `${h}:${m}:${s}`;
}

// some can return boolean 

// some any one match with condition Boolean

// every matches with condition it can return the true