import { useState, useEffect } from "react";
import PokemonCard from "../../components/card/pokemon-card";
import PokemonLogo from "../ui/logo/pokemon-logo";
import Axios from "axios";
import Pagination from "../layout/pagination";

function PokemonList() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [offset, setOffset] = useState(0);

  // console.log(`currentPage: ${currentPage}`);
  // console.log(`offset: ${offset}`);

  useEffect(() => {
    async function getAllPokemon() {
      try {
        setIsLoading(true);
        const pokemonArr = [];
        console.log(pokemonArr);
        for (let i = offset + 1; i <= 40; i++) {
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
      <div>
        <PokemonLogo />
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-4">
        {data.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.other.dream_world.front_default}
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
          setOffset={setOffset}
        />
      </div>
    </div>
  );
}

export default PokemonList;
