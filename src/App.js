import "./App.css";
import ColorCard from "./components/colorcard/ColorCard";
import { nanoid } from "nanoid";

function App() {
  const colorList = [
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
  ];

  return (
    <>
      <main className="APP">
        <h2 className="title">Color Saver</h2>
        <ul className="card-container">
          {colorList.map((color) => (
            <ColorCard key={color.id} color={color.colorCode} />
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
