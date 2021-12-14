import { useState } from "react";

import "./App.css";

const valueFor = (value: null | "X" | "O"): string => {
  if (value === "X") {
    return "❌";
  } else if (value === "O") {
    return "🔵";
  } else {
    return "👀";
  }
};

const Square = () => {
  const [value, setValue] = useState<null | "X" | "O">(null);
  const [name, setName] = useState<string>("");

  return (
    <div className={`square square-${value || "blank"}`}>
      <div className="value">{valueFor(value)}</div>
      <button onClick={() => setValue("X")}>X</button>
      <button onClick={() => setValue("O")}>O</button>
      <button onClick={() => setValue(null)}>clear</button>
      <div>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Star name..."
        />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>OTT Holiday Squares</h1>
      <div className="board">
        <div className="row">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="row">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="row">
          <Square />
          <Square />
          <Square />
        </div>
      </div>
    </div>
  );
};

export default App;
