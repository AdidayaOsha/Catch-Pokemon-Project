import React from "react";
import "./styles/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/layout";
import PokemonList from "./pages/pokemon-list";
import PokemonDetails from "./pages/pokemon-details";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/https://pokeapi.co/api/v2/pokemon/:id"
            element={<PokemonDetails />}
          />
          <Route path="/" element={<PokemonList />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
