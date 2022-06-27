import { useEffect, useState } from "react";
import Axios from "axios";
import MyPokemonListCardDetail from "./my-pokemon-list-card-details";
import LoadingItems from "../ui/loading/loading-items";

function MyPokemonListCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getPokemonByName() {
      try {
        const storagedPokemons = [];
        for (let i = 1; i <= 6; i++) {
          if (localStorage.getItem(`pokemon${i}`)) {
            storagedPokemons.push(localStorage.getItem(`pokemon${i}`));
          }
        }
        const allPokemon = await Promise.all(
          storagedPokemons.map((pokemon) =>
            Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
          )
        );
        setData(allPokemon);
      } catch (err) {
        console.log();
      }
    }
    getPokemonByName();
  }, []);

  function pokemonMap() {
    return data.map(({ data }) => (
      <MyPokemonListCardDetail
        key={data.id}
        name={data.name}
        image={data.sprites.other.dream_world.front_default}
        types={data.types[0].type.name}
        moves={data.moves[data.moves.length - 1].move.name}
      />
    ));
  }

  if (!data.length) {
    return <LoadingItems />;
  }

  return (
    <section>
      <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
          <div className="flex flex-col items-center p-8 bg-gray-100 rounded-xl">
            <div>
              <img
                className="lg:h-full lg:w-full md:w-60 md:h-80 w-32 h-40"
                src="https://freepngimg.com/thumb/pokemon/37701-7-pokemon-ash-transparent-image.png"
                alt="img"
              />
            </div>
            <div className="mx-auto text-center lg:text-left">
              <h2 className="text-2xl font-bold text-center">
                My Pokemon Lists
              </h2>

              <h1 className="mt-4 lg:text-xl md:text-lg text-sm text-gray-700 max-w-[45ch] text-center">
                This is my Pokemon List that I've captured, I can only hold{" "}
                <span className="font-bold">6 </span>
                Pokemon so I have to release one if I want to catch Pokemon
                again
              </h1>

              <div className="flex justify-center">
                <a
                  href="/"
                  className="inline-block px-6 py-3 mt-6 text-sm text-white bg-black rounded"
                >
                  Back to Pokédex
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:col-span-2 lg:grid-cols-3 lg:py-12">
            {pokemonMap()}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyPokemonListCard;
