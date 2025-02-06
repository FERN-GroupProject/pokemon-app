import { useEffect, useState } from "react";
import DisplayPokemon from "../components/DisplayPokemon";
import NavBar from "../components/NavBar";
import axios from 'axios';
import { toast } from "react-toastify";

export default function FavoritePage() {
    const [favorites, setFavorites] = useState([]);

    const getFavoritePokemon = async () => {
        try {
            const response = await axios.get('http://localhost:3000/favorites');
            setFavorites(response.data);
        } catch (error) {
            toast.error(`Error: ${error.message}`);
        }
    };

    useEffect(() => {
        getFavoritePokemon();
    }, []);

    return (
        <>
            <div className="mb-10">
                <NavBar />
            </div>
            <div className="container mx-auto flex items-center mb-5">
                <h1 className="text-white text-2xl font-bold">Favorite Pokemon</h1>
            </div>
            <div className="w-full">
                <DisplayPokemon pokemonData={favorites} />
            </div>
        </>
    );
}