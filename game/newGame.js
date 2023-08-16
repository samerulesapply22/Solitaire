import createDeck from "./createDeck.js";

const singleCardHolder = document.querySelector("#singleCardHolder");
const cardHolders = document.querySelectorAll(".cardHolder");

export default function newGame() {
  const deck = createDeck();
  clean();
  deal(deck);
}

function deal(deck) {
  cardHolders.forEach((cardHolder, index) => {
    for (let i = 0; i <= index; i++) {
      const cardDiv = createDiv(deck.shift());
      cardDiv.className += "inPlaceholder ";
      cardDiv.className += i !== index ? "back" : null;
      console.log(cardDiv);

      cardHolder.append(cardDiv);
    }
  });
}

function createDiv(card) {
  const cardDiv = document.createElement("div");
  cardDiv.className = "card ";
  const cardImg = document.createElement("img");
  cardImg.src = card.img;
  cardDiv.append(cardImg);

  return cardDiv;
}

function clean() {
  singleCardHolder.innerHTML = "";
  cardHolders.forEach((cardHolder) => (cardHolder.innerHTML = ""));
}
