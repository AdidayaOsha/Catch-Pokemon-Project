import ButtonPokeball from "./button-pokeball";
import ButtonMasterball from "./button-masterball";
import ButtonUltraball from "./button-ultraball";

function ButtonGroup({ data, isCatching, setIsCatching }) {
  console.log(`POKEMON DATA:${data}`);

  return (
    <div className="flex items-center -space-x-4 hover:space-x-1">
      <ButtonMasterball
        data={data}
        isCatching={isCatching}
        setIsCatching={setIsCatching}
      />
      <ButtonPokeball
        data={data}
        isCatching={isCatching}
        setIsCatching={setIsCatching}
      />
      <ButtonUltraball
        data={data}
        isCatching={isCatching}
        setIsCatching={setIsCatching}
      />
    </div>
  );
}

export default ButtonGroup;
