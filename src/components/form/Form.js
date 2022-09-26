import { useState } from "react";
import "./Form.css";

export default function Form({ onSubmit }) {
  const [colorCode, setColorCode] = useState("#cccccc");
  return (
    <form
      action=""
      className="form"
      style={{ backgroundColor: colorCode }}
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(colorCode);
      }}
    >
      <input
        type="color"
        value={colorCode}
        className="form__input-color"
        onChange={(event) => {
          setColorCode(event.target.value);
        }}
      />
      <input
        type="text"
        value={colorCode}
        className="form__input-colorText"
        onChange={(event) => {
          setColorCode(event.target.value);
        }}
      />
      <button type="submit" className="form__btn">
        Add
      </button>
    </form>
  );
}
