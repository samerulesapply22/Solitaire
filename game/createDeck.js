import Card from "./card.js";

function shuffle(deck) {
  for (let i = 0; i < deck.length; i++) {
    let j = Math.floor(Math.random() * deck.length);
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

function createDeck() {
  const cardsImg = [
    "cards/A-C.png",
    "cards/A-D.png",
    "cards/A-H.png",
    "cards/A-S.png",
    "cards/2-C.png",
    "cards/2-D.png",
    "cards/2-H.png",
    "cards/2-S.png",
    "cards/3-C.png",
    "cards/3-D.png",
    "cards/3-H.png",
    "cards/3-S.png",
    "cards/4-C.png",
    "cards/4-D.png",
    "cards/4-H.png",
    "cards/4-S.png",
    "cards/5-C.png",
    "cards/5-D.png",
    "cards/5-H.png",
    "cards/5-S.png",
    "cards/6-C.png",
    "cards/6-D.png",
    "cards/6-H.png",
    "cards/6-S.png",
    "cards/7-C.png",
    "cards/7-D.png",
    "cards/7-H.png",
    "cards/7-S.png",
    "cards/8-C.png",
    "cards/8-D.png",
    "cards/8-H.png",
    "cards/8-S.png",
    "cards/9-C.png",
    "cards/9-D.png",
    "cards/9-H.png",
    "cards/9-S.png",
    "cards/10-C.png",
    "cards/10-D.png",
    "cards/10-H.png",
    "cards/10-S.png",
    "cards/J-C.png",
    "cards/J-D.png",
    "cards/J-H.png",
    "cards/J-S.png",
    "cards/Q-C.png",
    "cards/Q-D.png",
    "cards/Q-H.png",
    "cards/Q-S.png",
    "cards/K-C.png",
    "cards/K-D.png",
    "cards/K-H.png",
    "cards/K-S.png",
  ];
  const values = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
  ];
  const suits = ["C", "D", "H", "S"];
  const deck = [];
  for (let value of values) {
    for (let suit of suits) {
      const newCard = Card(value, suit, cardsImg.shift());
      deck.push(newCard);
    }
  }
  return shuffle(deck);
}

export default createDeck;
