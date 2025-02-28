import Link from "next/link";

type Pokemon = {
  name: string;
  url: string;
};

export default async function Home({ searchParams }: { searchParams?: { query?: string } }) {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
  const data = await response.json();
  const pokemonList: Pokemon[] = data.results;

  const searchQuery = searchParams?.query?.toLowerCase() || "";

  // Filter the Pokémon list based on the search query
  const filteredPokemon = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchQuery)
  );
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Pokemon List</h1>

      <form className="w-full max-w-md mb-6 flex space-x-1" method="get">
        <input
          type="text"
          name="query"
          placeholder="Search Pokemon..."
          defaultValue={searchQuery}
          className="w-full px-4 py-2 text-black rounded-md outline-none bg-amber-50"
        />
        {searchQuery && (
          <Link
            href="/"
            className="text-lg text-white-400 ml-2 mt-1.5"
          >
            X
          </Link>
        )}
        <button type="submit" className="ml-2 cursor-pointer hover:text-blue-100">Search</button>
      </form>

      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredPokemon.length > 0 ? (
          filteredPokemon.map((pokemon, index) => (
            <li key={index} className="bg-gray-800 p-4 rounded-xl text-center hover:bg-gray-700 transition duration-300">
              <Link href={`/pokemon/${index + 1}`} className="text-lg font-medium capitalize">
                {pokemon.name}
              </Link>
            </li>
          ))
        ) : (
          <p className="text-gray-400">No Pokémon found</p>
        )}
      </ul>
    </div>
  );
}
