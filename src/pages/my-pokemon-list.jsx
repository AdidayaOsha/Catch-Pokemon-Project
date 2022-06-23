import React from "react";
import AccordionSidebar from "../components/ui/accordion/accordion-sidebar";
import MyPokemonListCard from "../components/card/my-pokemon-list-card";

function MyPokemonList() {
  return (
    <div className="bg-red-200">
      <AccordionSidebar />;
      <MyPokemonListCard />
    </div>
  );
}

export default MyPokemonList;
