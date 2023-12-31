import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import "./App.scss";
import { Button } from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App" onClick={() => setCount(count + 1)}>
      <Button fullWidth />
      <hr style={{ marginTop: 20 }} />
      <span>total: {count}</span>
    </div>
  );
}

export default App;
