const cardHolders = Array.from(document.querySelectorAll(".cardHolder"));

function matchToContainer(thisDeck, thisCard) {
  if (thisCard.value === 13) {
    const possibleHolder = cardHolders.find((cardHolder) =>
      cardHolder.classList.contains("empty")
    );
    if (!possibleHolder) return;
    possibleHolder.classList.remove("empty");
    classChanges(thisCard.div);
    const addedElements = selectAll(thisCard.div);
    possibleHolder.append(...addedElements);
    return;
  }

  const matchesArray = findMatchesToContainer(thisDeck, thisCard);
  if (!matchesArray.length) return;
  const possibleMatch = matchesArray.shift().div;
  classChanges(thisCard.div);
  const addedElements = selectAll(thisCard.div);
  possibleMatch.after(...addedElements);
}

function findMatchesToContainer(thisDeck, thisCard) {
  const matchesArray = thisDeck
    .filter((card) => card.color !== thisCard.color)
    .filter((card) => card.value === thisCard.value + 1)
    .filter((card) => card.div.classList.contains("inContainer"))
    .filter((card) => !card.div.classList.contains("back"))
    .filter((card) => card.div.nextElementSibling === null);

  return matchesArray;
}

function classChanges(card) {
  if (card.previousSibling) card.previousSibling.classList.remove("back");
  card.classList.replace("inDeck", "inContainer");
  if (card.parentElement.firstChild === card)
    card.parentElement.classList.add("empty");
}

function selectAll(card) {
  const addedElements = [];
  addedElements.push(card);
  let copyCard = card;
  while (copyCard.nextElementSibling) {
    addedElements.push(copyCard.nextElementSibling);
    copyCard = copyCard.nextElementSibling;
  }
  return addedElements;
}

export default matchToContainer;
