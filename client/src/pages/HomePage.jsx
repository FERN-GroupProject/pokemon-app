import { useEffect, useState } from "react";
import DisplayPokemon from "../components/DisplayPokemon";
import NavBar from "../components/NavBar";
import {toast}  from "react-toastify";
import axios from 'axios'

export default function HomePage() {

    const [pokemon, setPokemon] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);   
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPokemon, setFilteredPokemon] = useState(pokemon);
    const [selectedType, setSelectedType] = useState('');

    const getPokemonData = async(page = 1) => {
        try {
            let limit = 20;
            let offset = (page - 1) * limit;
            let url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

            const response = await axios.get(url);
            const data = response.data.results;

            const detailedData = await Promise.all(
                data.map(async (pokemon) => {
                    const pokemonDetails = await axios.get(pokemon.url);
                    const image = pokemonDetails.data.sprites.other['official-artwork'].front_default 
                    || pokemonDetails.data.sprites.front_default 
                    || null;
                    const types = pokemonDetails.data.types.map(typeInfo => typeInfo.type.name).join(', ')

                    let typeColors = '';
                    if (pokemonDetails.data.species && pokemonDetails.data.species.url) {
                        const pokemonSpecies = await axios.get(pokemonDetails.data.species.url);
                        typeColors = pokemonSpecies.data.color.name;
                    }

                    return {
                        name: pokemon.name,
                        image: image,
                        type: types,
                        color: typeColors,
                    }
                })
            )

            setPokemon(detailedData);
            setTotalPages(Math.ceil(response.data.count / limit));

        } catch (error) {
            toast.error("Error: " + error.message)
        }
    }


    useEffect(() => {
        getPokemonData(currentPage);
    }, [currentPage]);


    useEffect(() => {
        setFilteredPokemon(
            pokemon.filter(p => 
                p.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
                (selectedType === '' || p.type.includes(selectedType))
            )
        );
    }, [searchTerm, selectedType, pokemon]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage +1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleTypeChange = (event) => {
        setSelectedType(event.target.value);
    };

    return (
        <>
            <div className="mb-10">
                <NavBar />
            </div>
            <div className="container mx-auto flex items-center mb-5">
                <h1 className="text-white text-2xl font-bold">Pokemon Species</h1>
            </div>
            <div className="w-full flex gap-3 items-center justify-center mb-5">
                <input
                    type="text"
                    placeholder="search pokemon"
                    className="bg-zinc-800 border-none rounded text-sm text-gray-300"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select 
                    className="text-zinc-500 text-sm bg-zinc-800 p-2 border-none rounded cursor-pointer"
                    value={selectedType}
                    onChange={handleTypeChange}
                >
                    <option value="">Any Types</option>
                    <option value="grass">Grass</option>
                    <option value="fire">Fire</option>
                    <option value="water">Water</option>
                    <option value="bug">Bug</option>
                    <option value="normal">Normal</option>
                    <option value="poison">Poison</option>
                    <option value="electric">Electric</option>
                    <option value="ground">Ground</option>
                    <option value="fairy">Fairy</option>
                    <option value="fighting">Fighting</option>
                    <option value="psychic">Psychic</option>
                    <option value="rock">Rock</option>
                    <option value="ghost">Ghost</option>
                    <option value="ice">Ice</option>
                    <option value="dragon">Dragon</option>
                    <option value="dark">Dark</option>
                    <option value="steel">Steel</option>
                    <option value="flying">Flying</option>
                </select>
                <select className="text-zinc-500 text-sm bg-zinc-800 p-2 border-none rounded cursor-pointer">
                    Filter 2
                </select>
                <button className="text-zinc-500 text-sm bg-zinc-800 p-2 border-none rounded cursor-pointer">Favorite</button>
            </div>
            <div className="w-full">
                <DisplayPokemon pokemonData={filteredPokemon}/>
            </div>
            <div className="w-full flex justify-center gap-3 mt-5">
                <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className="text-zinc-500 text-sm bg-zinc-800 p-2 border-none rounded cursor-pointer"
                >
                    Previous
                </button>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="text-zinc-500 text-sm bg-zinc-800 p-2 border-none rounded cursor-pointer"
                >
                    Next
                </button>
            </div>
        </>
    );
}