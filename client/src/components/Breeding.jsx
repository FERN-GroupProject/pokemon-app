import { Card } from "flowbite-react";
import React from "react";

export default function Breeding({ customTheme, speciesData }) {
  return (
    <Card theme={customTheme}>
      <h5 className="text-2xl font-bold tracking-tight text-white">Breeding</h5>
      <div className="flex items-center">
        <h4 className="text-lg font-medium min-w-28 text-left">Egg Groups:</h4>
        <p className="capitalize text-gray-400">
          {speciesData.egg_groups
            .map((item) => item.name.replace(/(\d)/, " $1"))
            .join(", ")}
        </p>
      </div>
      <div className="flex items-center">
        <h4 className="text-lg font-medium min-w-28 text-left">Egg Cycle:</h4>
        <p className="capitalize text-gray-400">
          {speciesData.hatch_counter} cycles
        </p>
      </div>
    </Card>
  );
}
