import { useState } from "react";
import "./ColorCard.css";

export default function ColorCard({ colorCode, id, onDelete, onUpdate }) {
  const [hasBeenCopied, setHasBeenCopied] = useState(false);
  if (hasBeenCopied) {
    setTimeout(() => setHasBeenCopied(false), 1000);
  }
  function handleClick() {
    navigator.clipboard.writeText(colorCode);
    setHasBeenCopied(true);
  }
  function handleUpdate(event) {
    onUpdate(id, event.target.value);
  }

  return (
    <li
      className="color-card"
      style={{ backgroundColor: colorCode }}
      onClick={handleClick}
    >
      <input
        className="color-text"
        value={colorCode}
        onClick={(event) => event.stopPropagation()}
        onChange={handleUpdate}
      />
      <div
        className="card__delete-btn"
        onClick={(event) => {
          event.stopPropagation();
          onDelete();
        }}
      >
        x
      </div>
      {hasBeenCopied && <p className="copyMessage">color has been copied!</p>}
    </li>
  );
}
