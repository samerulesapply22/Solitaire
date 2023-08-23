import newGame from "./game/newGame.js";

newGame();
const newGameButton = document.getElementById("newGameButton");
newGameButton.addEventListener("click", () => {
  newGame();
});


