import { Link } from "react-router-dom";
import ButtonRelease from "../ui/button/button-release";

function MyPokemonListCardDetail({ name, image, types, moves, id }) {
  return (
    <div>
      <Link to={`https://pokeapi.co/api/v2/pokemon/${id}`} className="block">
        <div className="aspect-w-1 aspect-h-1">
          <img
            loading="lazy"
            alt="Simple Watch"
            className="object-cover rounded"
            src={image}
          />
        </div>
      </Link>
      <div className="flex flex-col text-center">
        <img
          className="lg:w-1/3 md:w-1/3 w-1/2 m-auto py-4"
          src="http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/7912daab5bb1496.png"
          alt="HP Bar"
        />
        <p className="font-bold uppercase bg-purple-600 w-1/3 m-auto text-white">
          {types}
        </p>
        <h1 className="font-bold uppercase">{name}</h1>
      </div>

      <div className="mt-2">
        <ButtonRelease />
      </div>
    </div>
  );
}

export default MyPokemonListCardDetail;
