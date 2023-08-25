const cardHolders = Array.from(document.querySelectorAll(".cardHolder"));
const aceHolders = Array.from(document.querySelectorAll(".aceHolder"));

export function matchToAceHolder(thisDeck, thisCard) {
  if (thisCard.value === 1) {
    const possibleAceHolder = aceHolders.find((aceHolder) =>
      aceHolder.classList.contains("empty")
    );
    if (!possibleAceHolder) return;
    possibleAceHolder.classList.remove("empty");
    classChanges(thisCard.div, "card inAceHolder");
    possibleAceHolder.append(thisCard.div);
    return true;
  }
  const [match] = findMatchToAceHolder(thisDeck, thisCard);
  if (!match) return;
  classChanges(thisCard.div, "card inAceHolder");
  match.div.parentElement.append(thisCard.div);
  return true;
}
export function matchToContainer(thisDeck, thisCard) {
  if (thisCard.value === 13) {
    const possibleHolder = cardHolders.find((cardHolder) =>
      cardHolder.classList.contains("empty")
    );
    if (!possibleHolder) return;
    possibleHolder.classList.remove("empty");
    classChanges(thisCard.div, "card inContainer");
    const addedElements = selectAll(thisCard.div);
    possibleHolder.append(...addedElements);
    return;
  }

  const matchesArray = findMatchesToContainer(thisDeck, thisCard);
  if (!matchesArray.length) return;
  const possibleMatch = matchesArray.shift().div;
  classChanges(thisCard.div, "card inContainer");
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
function findMatchToAceHolder(thisDeck, thisCard) {
  const match = thisDeck
    .filter((card) => card.suit === thisCard.suit)
    .filter((card) => card.value === thisCard.value - 1)
    .filter((card) => card.div.classList.contains("inAceHolder"));
  return match;
}
function classChanges(card, newClassName) {
  if (card.previousSibling) card.previousSibling.classList.remove("back");
  card.className = newClassName;
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
