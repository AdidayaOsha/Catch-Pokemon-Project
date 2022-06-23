import { Link } from "react-router-dom";

function ButtonCardDetail(props) {
  const { id } = props;

  return (
    <Link
      to={`https://pokeapi.co/api/v2/pokemon/${id}`}
      className="block text-white w-full p-4 mt-4 text-sm font-medium bg-red-500 rounded-md text-center"
      type="button"
    >
      Open Pokédex
    </Link>
  );
}

export default ButtonCardDetail;
