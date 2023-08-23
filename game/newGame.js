import createDeckOfDivs from "./createDeck.js";

const cardHolders = document.querySelectorAll(".cardHolder");
const deckHolderParent = document.getElementById("deckHolderParent");
const singleCardHolder = document.querySelector("#singleCardHolder");

export default function newGame() {
  const deck = createDeckOfDivs();
  clean();
  deal();
  iterateDeck();

  function deal() {
    cardHolders.forEach((cardHolder, index) => {
      for (let i = 0; i <= index; i++) {
        const cardDivInContainer = deck.shift();
        cardDivInContainer.className += "inContainer ";
        cardDivInContainer.className += i !== index ? "back" : null;

        cardHolder.append(cardDivInContainer);
      }
    });
  }

  function iterateDeck() {
    const deckHolder = document.createElement("div");
    deckHolder.setAttribute("id", "deckHolder");
    deckHolderParent.append(deckHolder);
    let currentCardIndex = 0;
    deckHolder.addEventListener("click", () => {
      if (currentCardIndex >= deck.length) {
        singleCardHolder.innerHTML = "";
        currentCardIndex = 0;
        return;
      }
      const cardDivInDeck = deck[currentCardIndex];
      cardDivInDeck.className += "inDeck ";
      singleCardHolder.append(cardDivInDeck);
      currentCardIndex++;
    });
  }
}

function clean() {
  singleCardHolder.innerHTML = "";
  deckHolderParent.innerHTML = "";
  cardHolders.forEach((cardHolder) => (cardHolder.innerHTML = ""));
}
