import "./ColorCard.css";

export default function ColorCard({ color }) {
  return (
    <li
      className="color-card"
      style={{ backgroundColor: color }}
      onClick={(event) => navigator.clipboard.writeText(color)}
    >
      <p className="color-text">{color}</p>
    </li>
  );
}
