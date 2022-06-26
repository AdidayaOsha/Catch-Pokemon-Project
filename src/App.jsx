import React from "react";
import "./styles/index.css";
import Layout from "./components/layout/layout";
import PokemonList from "./pages/pokemon-list";
import PokemonDetails from "./pages/pokemon-details";
import MyPokemonList from "./pages/my-pokemon-list";
import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route
              path="/https://pokeapi.co/api/v2/pokemon/:id"
              element={<PokemonDetails />}
            />
            <Route path="/mypokemonlist" element={<MyPokemonList />} />
            <Route path="/" element={<PokemonList />} />
          </Routes>
        </Layout>
      </BrowserRouter>
      <ToastContainer />
    </Fragment>
  );
}

export default App;
