import { useState } from "react";
import ButtonGroup from "../ui/button/button-group";
import LoadingScreen from "../ui/loading/loading-screen";

function PokemonCardDetails({ data }) {
  const [isCatching, setIsCatching] = useState(false);
  if (!data) {
    return <LoadingScreen />;
  }

  function statHandler() {
    return data.stats.map((stat) => {
      return (
        <p className="block mt-2 text-sm">
          {stat.stat.name}: {stat.base_stat}
        </p>
      );
    });
  }

  function typeHandler() {
    try {
      if (data.types.length > 1) {
        return (
          <div>
            <span className="">{data.types[0].type.name}</span>{" "}
            <span className="">{data.types[1].type.name}</span>
          </div>
        );
      } else {
        return (
          <div className="">
            <span className="">{data.types[0].type.name}</span>
          </div>
        );
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="my-32">
      <section className="relative overflow-hidden rounded-lg shadow-2xl pb-80 lg:pb-0">
        <div className="p-8 ml-auto text-center lg:w-2/3 sm:p-12">
          <p className="text-sm font-semibold tracking-widest uppercase">
            Base Experience: {data.base_experience}
          </p>
          <div>
            <h5 className="mt-6 font-black uppercase">
              <span className="text-5xl font-black sm:text-6xl">
                {data.name}
              </span>
              {typeHandler()}
              <img
                className="lg:w-1/4 md:w-1/3 w-1/2 m-auto py-4"
                src="http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/7912daab5bb1496.png"
                alt="HP Bar"
              />
              {statHandler()}
            </h5>
          </div>
          <div className="flex justify-center my-8">
            <ButtonGroup
              data={data}
              isCatching={isCatching}
              setIsCatching={setIsCatching}
            />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-80 lg:h-full lg:w-1/3 bg-black">
          <img
            alt="img"
            className={
              isCatching
                ? "absolute inset-0 object-contain w-full h-full lg:left-52 animate-ping"
                : "absolute inset-0 object-contain w-full h-full lg:left-52"
            }
            src={data.sprites.other.dream_world.front_default}
          />
        </div>
      </section>
    </div>
  );
}

export default PokemonCardDetails;
