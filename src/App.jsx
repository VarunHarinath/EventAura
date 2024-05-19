import { useState } from "react";
import Navbar from "./components/NavBar/Navbar";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <>
      <Navbar />
      <div className="m-5">
        <HomePage />
      </div>
    </>
  );
}

export default App;
