import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PokemonDetails from "../components/card/pokemon-details";
import Axios from "axios";

function PokemonDetailPage() {
  const [data, setData] = useState();
  console.log(`data: ${data}`);
  const { id } = useParams();
  console.log(`id: ${id}`);

  useEffect(() => {
    async function getPokemonById() {
      const response = await Axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      setData(response.data);
    }
    getPokemonById();
  }, [id]);

  if (!data) {
    return <h1>Loading....</h1>;
  }

  return (
    <Fragment>
      <PokemonDetails data={data} />
    </Fragment>
  );
}

export default PokemonDetailPage;
