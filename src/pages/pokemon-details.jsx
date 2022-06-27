import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PokemonDetails from "../components/card/pokemon-details";
import LoadingScreen from "../components/ui/loading/loading-screen";
import Axios from "axios";

function PokemonDetailPage() {
  const [data, setData] = useState();
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    return <LoadingScreen />;
  }

  return (
    <Fragment>
      <PokemonDetails data={data} />
    </Fragment>
  );
}

export default PokemonDetailPage;
