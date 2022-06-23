import React from "react";
import ButtonCardDetail from "../ui/button/button-card-detail";

function PokemonCard(props) {
  const { id, name, image, types, moves } = props;

  function typesHandler() {
    if (types === "fire") {
      return (
        <strong className="inline-block px-3 py-1 text-xs font-medium bg-red-400 text-white uppercase">
          {types}
        </strong>
      );
    } else if (types === "grass") {
      return (
        <strong className="inline-block px-3 py-1 text-xs font-medium bg-green-400 text-white uppercase">
          {types}
        </strong>
      );
    } else if (types === "water") {
      return (
        <strong className="inline-block px-3 py-1 text-xs font-medium bg-blue-400 text-white uppercase">
          {types}
        </strong>
      );
    } else if (types === "bug") {
      return (
        <strong className="inline-block px-3 py-1 text-xs font-medium bg-green-400 text-white uppercase">
          {types}
        </strong>
      );
    } else if (types === "normal") {
      return (
        <strong className="inline-block px-3 py-1 text-xs font-medium bg-gray-400 text-white uppercase">
          {types}
        </strong>
      );
    } else if (types === "poison") {
      return (
        <strong className="inline-block px-3 py-1 text-xs font-medium bg-purple-400 text-white uppercase">
          {types}
        </strong>
      );
    } else if (types === "fairy") {
      return (
        <strong className="inline-block px-3 py-1 text-xs font-medium bg-pink-400 text-white uppercase">
          {types}
        </strong>
      );
    } else if (types === "electric") {
      return (
        <strong className="inline-block px-3 py-1 text-xs font-medium bg-yellow-400 text-white uppercase">
          {types}
        </strong>
      );
    }
  }

  return (
    <div
      className="relative block border border-gray-100"
      href="/product/build-your-own-drone"
    >
      <div className="absolute py-2 rounded-full right-4 top-4">
        <h1 className="text-gray-300 text-2xl font-bold">#{id}</h1>
      </div>

      <div className="h-56 flex justify-center items-center">
        <img
          className="object-contain h-full rounded"
          src={image}
          alt=""
          loading="lazy"
        />
      </div>
      {/* <div className="">
        <img
          className="lg:absolute object-contain w-full h-56 lg:h-72 lg:bottom-40 rounded"
          src={image}
          alt=""
          loading="lazy"
        />
      </div> */}

      <div className="p-6">
        {typesHandler()}

        <h5 className="mt-4 text-lg font-bold uppercase">{name}</h5>

        <p className="mt-2 text-xs text-gray-700 uppercase">
          Tech: <span className="font-bold">{moves}</span>
        </p>

        <ButtonCardDetail />
      </div>
    </div>
  );
}

export default PokemonCard;
