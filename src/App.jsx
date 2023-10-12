import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import "./HomePage.css";
import HomePage from "./HomePage.jsx";
import PokemonList from "./PokemonList.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemon-list" element={<PokemonList />} />
        
      </Routes>
    </div>
  );
}

export default App;
