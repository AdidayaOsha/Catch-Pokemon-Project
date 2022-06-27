import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import PokemonCard from "../../components/card/pokemon-card";
import PokemonLogo from "../ui/logo/pokemon-logo";
import Axios from "axios";
import LoadingScreen from "../ui/loading/loading-screen";
import Pagination from "../layout/pagination";

function PokemonList() {
  const [maxPokemon] = useState(151);
  const [itemsPerPage] = useState(20);
  const [maxPage, setMaxPage] = useState(Math.ceil(maxPokemon / itemsPerPage));
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const searchGlobal = useSelector((state) => state.pokemon.pokemonName);

  useEffect(() => {
    async function getAllPokemon() {
      try {
        setIsLoading(true);
        const pokemonArr = [];
        console.log(pokemonArr);

        if (searchGlobal) {
          const response = await Axios.get(
            `https://pokeapi.co/api/v2/pokemon/${searchGlobal}`
          );
          pokemonArr.push(response.data);
          setData(pokemonArr);
          setMaxPage(1);
        } else {
          setMaxPage(Math.ceil(maxPokemon / itemsPerPage));
          for (let i = 1; i <= maxPokemon; i++) {
            const response = await Axios.get(
              `https://pokeapi.co/api/v2/pokemon/${i}`
            );
            pokemonArr.push(response.data);
          }
        }
        setData(pokemonArr);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        console.log(err);
      }
    }
    getAllPokemon();
  }, [searchGlobal, maxPokemon, itemsPerPage]);

  function renderList() {
    const beginIdx = (currentPage - 1) * itemsPerPage;
    const currentData = data.slice(beginIdx, beginIdx + itemsPerPage);
    if (currentData.length) {
      return currentData.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          image={pokemon.sprites.other.dream_world.front_default}
          types={pokemon.types[0].type.name}
          moves={pokemon.moves[pokemon.moves.length - 1].move.name}
        />
      ));
    }
  }

  function nextPage() {
    if (currentPage < maxPage) {
      setCurrentPage(currentPage + 1);
    }
  }
  function prevPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div>
      <div>
        <PokemonLogo />
      </div>
      <Pagination
        currentPage={currentPage}
        prevPage={prevPage}
        nextPage={nextPage}
        maxPage={maxPage}
      />
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-4">
        {renderList()}
      </div>
    </div>
  );
}

export default PokemonList;
