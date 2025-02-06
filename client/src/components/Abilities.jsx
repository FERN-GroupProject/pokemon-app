import { Card, List } from "flowbite-react";

export default function Abilities({ pokemonData, abilities, customTheme }) {
  const customList = {
    root: {
      base: "list-inside space-y-1 text-white font-medium text-lg",
    },
  };
  return (
    <Card theme={customTheme} className="w-full">
      <h5 className="text-2xl font-bold tracking-tight text-white">
        Abilities
      </h5>
      <List theme={customList}>
        {pokemonData?.abilities?.map((item, i) => (
          <div key={i}>
            <List.Item className="capitalize">
              {item.ability.name}
              {item.is_hidden === true ? <span className="py-1 ms-2 px-2 bg-white text-gray-800 rounded-lg text-xs">Hidden</span> : null}
            </List.Item>
            {abilities[i]?.effect_entries?.find(
              (entry) => entry.language?.name === "en"
            ) && (
              <p className="font-normal text-gray-400">
                {
                  abilities[i]?.effect_entries?.find(
                    (entry) => entry.language?.name === "en"
                  )?.short_effect
                }
              </p>
            )}
          </div>
        ))}
      </List>
    </Card>
  );
}
