import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="count-regis">
        <p>Registros: {count}</p>
      </div>
      <div className="buttons">
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>Mas</button>
        </div>

        <div className="card">
          <button onClick={() => setCount((count) => count - 1)}>Menos</button>
        </div>
      </div>
    </>
  );
}

export default App;
