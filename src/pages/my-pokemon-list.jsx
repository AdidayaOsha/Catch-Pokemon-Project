import React from "react";
import { useEffect } from "react";
import MyPokemonListCard from "../components/card/my-pokemon-list-card";

function MyPokemonList() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <MyPokemonListCard />
    </div>
  );
}

export default MyPokemonList;
