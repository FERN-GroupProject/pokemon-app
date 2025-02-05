import { Card } from "flowbite-react";

export default function CardWeight({ pokemonData }) {
  const customCards = {
    root: {
      base: "flex rounded-lg bg-[#10181E] border border-[#1F2931]",
      children: "flex h-full md:flex-col justify-center items-center gap-1 p-1",
    },
  };
  const customCardsContent = {
    root: {
      base: "flex rounded-lg bg-[#172026] min-w-[100px] md:min-w-[110px] lg:min-w-[120px] min-h-[80px] md:min-h-0 justify-center",
      children:
        "flex h-full w-full flex-col justify-center items-center gap-1 py-3 px-6 text-center",
    },
  };
  return (
    <Card className="max-w-sm" theme={customCards}>
      <Card theme={customCardsContent}>
        <i className="fa-solid fa-ruler-vertical text-xl md:text-2xl flex justify-center leading-none" ></i>
        <span className="whitespace-nowrap">
          {(pokemonData.height / 10).toFixed(0)} M
        </span>
      </Card>
      <Card theme={customCardsContent}>
        <i className="fa-solid fa-weight-hanging flex text-lg md:text-xl justify-center leading-none"></i>
        <span className="whitespace-nowrap">
          {(pokemonData.weight / 10).toFixed(0)} Kg
        </span>
      </Card>
    </Card>
  );
}
