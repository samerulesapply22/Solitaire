import createDeckOfDivs from "./createDeck.js";

const cardHolders = document.querySelectorAll(".cardHolder");
const deckHolderParent = document.getElementById("deckHolderParent");
const singleCardHolder = document.querySelector("#singleCardHolder");

export default function newGame() {
  const deck = createDeckOfDivs();

  clean();
  deal();
  iterateDeck();

  deck.forEach((card) =>
    card.div.addEventListener("click", () => {
      if (card.div.classList.contains("back")) return;
      matchToContainer(card);
    })
  );

  function matchToContainer(thisCard) {
    const matchesArray = deck
      .filter((card) => card.color !== thisCard.color)
      .filter((card) => card.value === thisCard.value + 1)
      .filter((card) => card.div.classList.contains("inContainer"))
      .filter((card) => !card.div.classList.contains("back"));
    if (!matchesArray.length) return;

    const possibleMatch = matchesArray.shift().div;
    thisCard.div.classList.replace("inDeck", "inContainer");
    possibleMatch.append(thisCard.div);
  }

  function deal() {
    const thisDeck = [...deck];
    cardHolders.forEach((cardHolder, index) => {
      for (let i = 0; i <= index; i++) {
        const cardDivInContainer = thisDeck.shift().div;
        cardDivInContainer.className += "inContainer ";
        cardDivInContainer.className += i !== index ? "back" : "";

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
