import "../style/style.css";
import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { FastAverageColor } from "fast-average-color";
import Svg from "./Svg";
import CardWeight from "./CardWeight";
import DropdownComp from "./Dropdown";

export default function Header() {
  const [pokemonData, setPokemonData] = useState({});
  const [speciesData, setSpeciesData] = useState(null);
  const [svgColor, setSvgColor] = useState("#FFFFFF");
  const [isLoading, setIsLoading] = useState(true);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const playSoundRef = useRef(false);
  const imgRef = useRef(null);
  const params = useParams();

  const playSuccessSound = () => {
    if (playSoundRef.current) return;
    playSoundRef.current = true;
    const audio = new Audio("/sound/after.MP3");
    audio.volume = 1;
    audio.play().catch((error) => {
      console.error("Gagal memutar sound:", error);
    });
  };

  useEffect(() => {
    const getPokemonData = async () => {
      try {
        setIsLoading(true);
        const url = `https://pokeapi.co/api/v2/pokemon/${params.id}`;
        const response = await axios.get(url);
        setPokemonData(response.data);

        const species = await axios.get(response.data.species.url);
        setSpeciesData(species.data);
        playSuccessSound();
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getPokemonData();
  }, [params.id]);

  useEffect(() => {
    if (pokemonData.types && pokemonData.types.length > 0) {
      const typeName = pokemonData.types[0].type.name;
      const color = getComputedStyle(document.documentElement).getPropertyValue(
        `--back-${typeName}`
      );
      setSvgColor(color.trim());
    }
  }, [pokemonData]);

  return (
    <div>
      <div className="relative mb-3">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <div className="text-lg md:text-2xl capitalize font-medium">
              {pokemonData.name.replace("-", " ")}
            </div>
            <div className="text-md md:text-lg font-normal text-gray-300">
              #{String(pokemonData.id).padStart(4, "0")}
            </div>
          </div>
        )}

        {speciesData?.varieties?.length > 1 && (
          <div className="absolute top-0 right-0">
            <DropdownComp speciesData={speciesData} />
          </div>
        )}
      </div>
      <div className="flex justify-center relative">
        {pokemonData.sprites?.other?.["official-artwork"] ? (
          <>
            <div className="relative">
              {isLoading ? (
                <p className="text-center">Loading...</p>
              ) : (
                <>
                  <Svg svgColor={svgColor} />
                  <img
                    ref={imgRef}
                    src={
                      pokemonData.sprites.other["official-artwork"]
                        .front_default
                    }
                    alt={pokemonData.name}
                    onLoad={() => setIsImageLoaded(true)}
                    style={{
                      position: "relative",
                      zIndex: 3,
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </>
              )}
            </div>
            {isImageLoaded && (
              <>
                <div className="absolute top-3 left-0 items-center gap-2 flex z-30 flex-col">
                  {pokemonData.types.map((item) => (
                    <div
                      className={`bg-back-${item.type.name} rounded-full p-3`}
                    >
                      <img
                        className="w-6 h-6"
                        src={`/icon/${item.type.name}.svg`}
                        alt={`${item.type.name} Type`}
                      />
                    </div>
                  ))}
                  <div className="bg-white p-3 rounded-full cursor-pointer">
                    <i className="fa-solid fa-heart text-red-600 text-2xl flex justify-center leading-none"></i>
                  </div>
                </div>
                <div className="absolute md:top-0 md:right-0 bottom-[-1rem] md:bottom-auto left-1/2 md:left-auto z-30 md:z-0 -translate-x-1/2 md:translate-x-0 flex md:flex-col gap-2">
                  <CardWeight pokemonData={pokemonData} />
                </div>
              </>
            )}
          </>
        ) : (
          <p className="text-center">Loading...</p>
        )}
      </div>
    </div>
  );
}
