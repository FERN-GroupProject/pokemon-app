import { Card, Progress } from "flowbite-react";
import React from "react";

export default function Stats({ pokemonData }) {
  const customTheme = {
    root: {
      base: "flex rounded-lg bg-[#172026] shadow-md ",
      children: "flex h-full flex-col justify-center gap-2 md:gap-3 p-6",
    },
  };

  const customBar = {
    base: "w-full overflow-hidden rounded-full bg-gray-700",
    color: {
      dark: "bg-gray-200",
      green: "bg-green-500",
    },
  };
  return (
    <Card theme={customTheme} className="w-full">
      <h5 className="text-2xl font-bold tracking-tight text-white">Stats</h5>
      {pokemonData.stats.map((item) => (
        <div className="flex items-center w-full justify-between">
          <p className="font-medium text-gray-400 whitespace-nowrap pe-3 capitalize">
            {item.stat.name === "special-attack"
              ? "Sp. Attack"
              : item.stat.name === "special-defense"
              ? "Sp. Defense"
              : item.stat.name}
          </p>
          <div className="w-full">
            <Progress
              theme={customBar}
              progress={(item.base_stat / 180) * 100}
              color={`${
                ["special-attack", "special-defense"].includes(item.stat.name)
                  ? "green"
                  : "dark"
              }`}
            />
          </div>
          <p className="font-medium text-gray-400 whitespace-nowrap min-w-14 md:min-w-16 text-right">
            {item.base_stat}%
          </p>
        </div>
      ))}
    </Card>
  );
}
