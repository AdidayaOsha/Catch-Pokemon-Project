import PokemonCardDetails from "./pokemon-card-details";

function PokemonDetails(props) {
  const { data } = props;

  return (
    <div>
      <PokemonCardDetails data={data} />
    </div>
  );
}

export default PokemonDetails;
