import React from "react";
import ButtonCardDetail from "../ui/button/button-card-detail";
import { Link } from "react-router-dom";

function PokemonCard(props) {
  const { id, name, image, types, moves } = props;

  function typesHandler() {
    if (types === "fire") {
      return (
        <strong className="inline-block px-3 py-1 text-xs font-medium bg-red-400 text-white italic uppercase">
          {types}
        </strong>
      );
    } else if (types === "grass") {
      return (
        <strong className="inline-block px-3 py-1 text-xs font-medium bg-green-400 text-white italic uppercase">
          {types}
        </strong>
      );
    } else if (types === "water") {
      return (
        <strong className="inline-block px-3 py-1 text-xs font-medium bg-blue-400 text-white italic uppercase">
          {types}
        </strong>
      );
    } else if (types === "bug") {
      return (
        <strong className="inline-block px-3 py-1 text-xs font-medium bg-green-400 text-white italic uppercase">
          {types}
        </strong>
      );
    } else if (types === "normal") {
      return (
        <strong className="inline-block px-3 py-1 text-xs font-medium bg-gray-400 text-white italic uppercase">
          {types}
        </strong>
      );
    } else if (types === "poison") {
      return (
        <strong className="inline-block px-3 py-1 text-xs font-medium bg-purple-400 text-white italic uppercase">
          {types}
        </strong>
      );
    } else if (types === "fairy") {
      return (
        <strong className="inline-block px-3 py-1 text-xs font-medium bg-pink-400 text-white italic uppercase">
          {types}
        </strong>
      );
    } else if (types === "electric") {
      return (
        <strong className="inline-block px-3 py-1 text-xs font-medium bg-yellow-400 text-white italic uppercase">
          {types}
        </strong>
      );
    } else if (types === "ground") {
      return (
        <strong className="inline-block px-3 py-1 text-xs font-medium bg-brown-400 text-white italic uppercase">
          {types}
        </strong>
      );
    }
  }

  return (
    <div
      className="relative block border-2 border-gray-100 shadow-sm h-1/2"
      href="/product/build-your-own-drone"
    >
      <div className="absolute py-2 rounded-full right-4 top-4">
        <h1 className="text-gray-300 text-2xl font-bold italic">#{id}</h1>
      </div>

      <Link
        className="h-32 flex justify-center items-center"
        to={`https://pokeapi.co/api/v2/pokemon/${id}`}
      >
        <img
          className="absolute object-contain h-full rounded hover:animate-bounce"
          src={image}
          alt=""
          loading="lazy"
        />
      </Link>

      <div className="p-6 bg-gray-100 shadow-md">
        {typesHandler()}

        <h5 className="mt-4 text-lg font-bold uppercase italic">{name}</h5>

        <div className="mt-2 text-xs text-gray-700 uppercase flex flex-col">
          <span className="italic">Tech:</span>
          <span className="font-bold italic">{moves}</span>
        </div>
        <div>
          <ButtonCardDetail id={id} />
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
