import { useState } from "react";
import "./App.css";
import { Card } from "./ui/Card/Card";
import { ItemDetail } from "./components/ItemDetail/ItemDetail";
import { Footer } from "./components/Footer/Footer";

function App() {
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
