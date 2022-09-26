import { useState, useEffect } from "react";
import "./ColorCard.css";

export default function ColorCard({ colorCode, id, onDelete, onUpdate }) {
  const [hasBeenCopied, setHasBeenCopied] = useState(false);
  const [colorName, setColorName] = useState("");
  if (hasBeenCopied) {
    setTimeout(() => setHasBeenCopied(false), 1000);
  }

  useEffect(() => {
    async function loadColorName() {
      try {
        const response = await fetch(
          `https://www.thecolorapi.com/id?hex=${colorCode.slice(1)}`
        );
        const data = await response.json();
        setColorName(data.name.value);
      } catch (error) {
        console.log(error);
        setColorName("");
      }
    }
    loadColorName();
  }, [colorCode]);

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
      <div className="color-name">{colorName}</div>
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
