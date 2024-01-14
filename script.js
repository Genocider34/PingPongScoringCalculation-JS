const player1Score = document.getElementById("player1Score");
const player2Score = document.getElementById("player2Score");
const player1Btn = document.querySelector(".player1Btn");
const player2Btn = document.querySelector(".player2Btn");
const resetBtn = document.querySelector(".resetBtn");
const goalSelect = document.querySelector("#score-goal");
let currentPlayer1Score = 0;
let currentPlayer2Score = 0;
let finalGoal = 0;
goalSelect.addEventListener("change", () => {
  finalGoal = goalSelect.value;
  if (currentPlayer1Score >= finalGoal) {
    console.log("Player 1 Win");
    // player1Score.classList.add("win-active");
    // player2Score.classList.add("lose-active");
  }
});

player1Btn.addEventListener("click", () => {
  currentPlayer1Score++;
  player1Score.textContent = currentPlayer1Score;
});

player2Btn.addEventListener("click", () => {
  currentPlayer2Score++;
  player2Score.textContent = currentPlayer2Score;
});

resetBtn.addEventListener("click", () => {
  player1Score.textContent = "0";
  player2Score.textContent = "0";
});
