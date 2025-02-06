export default function DisplayPokemon({pokemonData}) {
    

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
                { Array.isArray(pokemonData) && pokemonData.map((item, index) => (
                <div key={item.name} className="bg-white rounded-2xl shadow-md p-4 flex justify-between items-center">
                    <div>
                        <h2 className="text-xl font-bold">{item.name}</h2>
                        <p className="text-gray-600 text-sm mb-2">#{String(index + 1).padStart(4, '0')}</p>
                        <p className="text-gray-600 italic text-sm">{item.type}</p>
                        <div className="flex space-x-2 mt-2">
                                {item.color.split(', ').map((color, index) => (
                                    <div key={index} className="w-4 h-4 rounded-full" style={{ backgroundColor: color }}></div>
                                ))}
                        </div>
                    </div>
                    <div>
                        <img src={item.image} alt={item.name} className="mb-2 w-24 h-24 object-fit" />
                    </div>
                </div>
                
                ))}
            </div>
        </>
    );
}