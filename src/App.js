import "./App.css";
import ColorCard from "./components/colorcard/ColorCard";
import { nanoid } from "nanoid";
import Form from "./components/form/Form";
import { useState } from "react";

function App() {
  /* const initialColorList = [
    {
      id: nanoid(),
      colorCode: "#ccc",
    },
    {
      id: nanoid(),
      colorCode: "#4c6ef5",
    },
    {
      id: nanoid(),
      colorCode: "#82c91e",
    },
    {
      id: nanoid(),
      colorCode: "#12b886",
    },
    {
      id: nanoid(),
      colorCode: "#82c91e",
    },
  ]; */
  const [colorList, setColorList] = useState([]);
  function addColor(newColor) {
    setColorList((prevList) => [
      {
        id: nanoid(),
        colorCode: newColor,
      },
      ...prevList,
    ]);
  }

  console.log(colorList);

  function updateColor(id, colorCode) {
    console.log(id);
    const updatedColorList = colorList.map((color) => {
      console.log(color.id);
      if (color.id === id) {
        console.log(id);
        return {
          ...color,
          colorCode: colorCode,
          //colorCode (bei Felix code)
        };
      } else {
        return color;
      }
    });
    console.log(updatedColorList);
    setColorList(updatedColorList);
  }

  function deleteColor(id) {
    const updatedColorList = colorList.filter((color) => color.id !== id);
    setColorList(updatedColorList);
  }

  return (
    <>
      <main className="APP">
        <h2 className="title">Color Saver</h2>
        <Form onSubmit={addColor} />
        <ul className="card-container">
          {colorList.map(({ id, colorCode }, index) => (
            <ColorCard
              key={index}
              id={id}
              colorCode={colorCode}
              onUpdate={updateColor}
              onDelete={() => deleteColor(id)}
            />
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
