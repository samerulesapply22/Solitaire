export default function Card(value, suit, img) {
  value = Number(value);
  const color = suit === "C" || suit === "S" ? "black" : "red";

  function createDiv() {
    const cardDiv = document.createElement("div");
    cardDiv.className = "card ";
    const cardImg = document.createElement("img");
    cardImg.src = img;
    cardDiv.append(cardImg);

    return cardDiv;
  }
  const div = createDiv();

  return { value, suit, color, div };
}
