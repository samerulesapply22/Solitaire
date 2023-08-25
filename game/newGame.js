import createDeckOfDivs from "./createDeck.js";
import matchToContainer from "./matchToContainer.js";

const cardHolders = document.querySelectorAll(".cardHolder");
const deckHolderParent = document.getElementById("deckHolderParent");
const singleCardHolder = document.getElementById("singleCardHolder");

export default function newGame() {
  const deck = createDeckOfDivs();
  clean();
  deal();
  iterateDeck();

  deck.forEach((card) =>
    card.div.addEventListener("click", () => {
      if (card.div.classList.contains("back")) return;

      matchToContainer(deck, card);
    })
  );

  function deal() {
    const thisDeck = [...deck];
    cardHolders.forEach((cardHolder, index) => {
      for (let i = 0; i <= index; i++) {
        const cardDivInContainer = thisDeck.shift().div;
        cardDivInContainer.className += "inContainer ";
        cardDivInContainer.className += i !== index ? "back " : "";

        cardHolder.append(cardDivInContainer);
      }
    });
  }

  function iterateDeck() {
    const thisDeck = deck.filter(
      (card) => !card.div.classList.contains("inContainer")
    );
    thisDeck.forEach((card) => (card.div.className += "inDeck "));

    const deckHolder = document.createElement("div");
    deckHolder.setAttribute("id", "deckHolder");
    deckHolderParent.append(deckHolder);

    let currentCardIndex = 0;
    deckHolder.addEventListener("click", () => {
      if (!thisDeck[currentCardIndex]) {
        singleCardHolder.innerHTML = "";
        currentCardIndex = 0;
        return;
      }
      let cardDivInDeck = thisDeck[currentCardIndex].div;
      while (!cardDivInDeck.classList.contains("inDeck")) {
        currentCardIndex++;
        if (!thisDeck[currentCardIndex]) return;
        cardDivInDeck = thisDeck[currentCardIndex].div;
      }
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
