export default function Card(value, suit, img) {
  const color = suit === "C" || suit === "S" ? "black" : "red";
  
  function div() {
      const cardDiv = document.createElement("div");
      cardDiv.className = "card ";
      const cardImg = document.createElement("img");
      cardImg.src = this.img;
      cardDiv.append(cardImg);
    
      return cardDiv;
  }

  return { value, suit, color, img, inPlace: false, div};
}
