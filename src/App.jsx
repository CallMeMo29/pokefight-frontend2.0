import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "../Components/HomePage.jsx";
import PokemonList from "../Components/PokemonList.jsx";
import Battle from "../Components/Battle.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemon-list" element={<PokemonList />} />
        {/* <Route path="/battle" element={<Battle />} /> */}
        <Route path="/battle/:id" element={<Battle />} />
      </Routes>
    </div>
  );
}

export default App;
