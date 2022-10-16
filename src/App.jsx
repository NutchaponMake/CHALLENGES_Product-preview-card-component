import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Card } from "./ui/Card/Card";
import { ItemDetail } from "./components/ItemDetail/ItemDetail";
import { Footer } from "./components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Card>
        <ItemDetail />
      </Card>
      <Footer />
    </>
  );
}

export default App;
