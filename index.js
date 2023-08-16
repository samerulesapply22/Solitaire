import newGame from "./game/newGame.js";

newGame();
const newGameButton = document.querySelector("#newGameButton");
newGameButton.addEventListener("click", () => {
  newGame();
});
