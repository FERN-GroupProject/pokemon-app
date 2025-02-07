import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


export default function DisplayPokemon({pokemonData}) {
    
    const addToFavorites = async (pokemon) => {
        try {
            await axios.post('http://localhost:3000/favorites', pokemon);
            toast.success(`${pokemon.name} added to favorites!`);
        } catch (error) {
            toast.error(`Error: ${error.message}`);
        }
    };

    return (
        <>  
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
                { Array.isArray(pokemonData) && pokemonData.map((item, index) => (
                    <Link to={`/Detail/${item.name}`} key={item.name}>
                    
                <div className="bg-white rounded-2xl shadow-md p-4 flex justify-between items-center">
                    <div>
                        <h2 className="text-xl font-bold capitalize">{item.name}</h2>
                        <p className="text-gray-600 text-sm mb-2">#{String(index + 1).padStart(4, '0')}</p>
                        <p className="text-gray-600 italic text-sm capitalize">{item.type}</p>
                        <div className="flex space-x-2 mt-2">
                                {item.color && item.color.split(', ').map((color, index) => (
                                    <div key={index} className="w-4 h-4 rounded-full" style={{ backgroundColor: color }}></div>
                                ))}
                        </div>
                    </div>
                    <div>
                        <img src={item.image} alt={item.name} className="mb-2 w-24 h-24 object-fit" />
                            <button 
                                className="bg-red-500 text-white p-0.5 rounded mt-2 flex ml-auto"
                                onClick={() => addToFavorites(item)}
                            >
                                <i className="fa-solid fa-heart text-white text-2xl flex justify-center leading-none"></i>
                            </button>
                    </div>
                </div>
                    </Link>
                
                ))}
            </div>
        </>
    );
}