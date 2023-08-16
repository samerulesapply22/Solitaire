export default function Card(value, suit, img) {
  const color = suit === "C" || suit === "S" ? "black" : "red";

  return { value, suit, color, img, inPlace: false};
}
