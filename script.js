const p1Display = document.querySelector(".p1-display");
const p2Display = document.querySelector(".p2-display");
const p1Button = document.querySelector(".p1-btn");
const p2Button = document.querySelector(".p2-btn");
const resetButton = document.querySelector(".reset-btn");
const winningScoreSelect = document.querySelector("#play-to");

let p1Score = 0;
let p2Score = 0;
let winningScore = 0;
let isGameOver = false;

winningScoreSelect.addEventListener("change", () => {
  winningScore = parseInt(this.value);
  reset();
});
p1Button.addEventListener("click", () => {
  if (!isGameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      isGameOver = true;
      p1Display.classList.add("winner");
      p2Display.classList.add("loser");
    }
    p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener("click", () => {
  if (!isGameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      isGameOver = true;
      p2Display.classList.add("winner");
      p1Display.classList.add("loser");
    }
    p2Display.textContent = p2Score;
  }
});

resetButton.addEventListener("click", reset);

function reset() {
  isGameOver = false;
  p1Display.classList.remove("winner", "loser");
  p2Display.classList.remove("winner", "loser");
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
}
