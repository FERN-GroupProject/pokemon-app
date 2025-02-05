import { Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";
export default function DropdownComp({ speciesData }) {
  
  return (
    <Dropdown
      className="bg-[#1F2931] border-none "
      dismissOnClick={false}
      renderTrigger={() => (
        <span className="flex gap-1 items-center cursor-pointer bg-[#1F2931] py-2 px-3 md:py-3 md:px-4 font-medium rounded-md">
          {speciesData.varieties.length} Form
          <span>
            <i className="fa-solid fa-chevron-down"></i>
          </span>
        </span>
      )}
    >
      {speciesData.varieties.map((variety, i) => (
        <Dropdown.Item
          key={variety.pokemon.name}
          className="w-full min-w-max capitalize text-white focus:bg-[#2B3945] hover:bg-[#2B3945]"
          onClick={() => {
            setTimeout(() => {
              window.location.href = `/Detail/${variety.pokemon.name}`;
            }, 0);
          }}
        >
          {variety.pokemon.name.replace("-", " ")}
        </Dropdown.Item>
      ))}
    </Dropdown>
  );
}
