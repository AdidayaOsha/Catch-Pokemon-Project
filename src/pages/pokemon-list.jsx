import { Fragment } from "react";
import { useEffect } from "react";
import PokemonLists from "../components/card/pokemon-list";

function PokemonList(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <PokemonLists />
    </Fragment>
  );
}

export default PokemonList;
