import { useState } from "react";
import "./App.css";

function App() {
  let [greetingMes, setGreetingMes] = useState("Greeting Message");
  let [textGreetingMes, setTextGreetingMes] = useState("");
  console.log(textGreetingMes);
  const handleConfilm = () => {
    setGreetingMes(textGreetingMes ? textGreetingMes : "Greeting Message");
  };

  return (
    <div className="App">
      <div className="greeting-container">{greetingMes}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          onChange={(e) => setTextGreetingMes(e.target.value)}
        />
      </div>

      <div className="buttons">
        <button onClick={handleConfilm}>Update text</button>
      </div>
    </div>
  );
}

export default App;
