import { useState, useEffect } from "react";
import PokemonCard from "./pokemon-card";
import Axios from "axios";
import Pagination from "../layout/pagination";

function PokemonCardList() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  console.log(currentPage);

  useEffect(() => {
    async function getAllPokemon() {
      try {
        setIsLoading(true);
        const pokemonArr = [];
        console.log(pokemonArr);
        for (let i = 1; i <= 60; i++) {
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
  }, []);

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
        <Pagination
          data={data}
          setData={setData}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default PokemonCardList;
