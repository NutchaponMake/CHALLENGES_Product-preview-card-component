import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Card } from "./ui/Card/Card";
import { ItemDetail } from "./components/ItemDetail/ItemDetail";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Card>
      <ItemDetail />
    </Card>
  );
}

export default App;
