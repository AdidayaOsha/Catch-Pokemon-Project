import { useState, useEffect } from "react";
import { Fragment } from "react";
import PokemonCard from "./pokemon-card";
import Pagination from "../layout/pagination";
import Axios from "axios";

function PokemonCardList() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  function handlePageClick(data) {
    let currentPage = data.selected + 1;
    setCurrentPage(currentPage);
  }

  useEffect(() => {
    async function getAllPokemon() {
      try {
        setIsLoading(true);
        const pokemonArr = [];
        for (let i = 1; i <= 40; i++) {
          const response = await Axios.get(
            `https://pokeapi.co/api/v2/pokemon/${i}`
          );
          pokemonArr.push(response.data);
        }
        setData(pokemonArr);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        console.log(err);
      }
    }
    getAllPokemon();
  }, [currentPage]);

  if (isLoading) {
    return <h1>Loading..</h1>;
  }

  return (
    <div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8">
        {data.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.front_default}
            types={pokemon.types[0].type.name}
            moves={pokemon.moves[pokemon.moves.length - 1].move.name}
          />
        ))}
      </div>
      <div>
        <Pagination dataCount={data} handlePageClick={handlePageClick} />
      </div>
    </div>
  );
}

export default PokemonCardList;
