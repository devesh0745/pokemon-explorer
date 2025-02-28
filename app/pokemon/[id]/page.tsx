import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Ability {
  ability: {
    name: string;
  };
  is_hidden: boolean;
}

interface Type {
  type: {
    name: string;
  };
}

interface Stat {
  stat: {
    name: string;
  };
  base_stat: number;
}

interface Move {
  move: {
    name: string;
  };
}

interface Pokemon {
  name: string;
  sprites: {
    front_default: string;
  };
  base_experience: number;
  abilities: Ability[];
  types: Type[];
  stats: Stat[];
  moves: Move[];
}

export default async function PokemonDetails({ params }: { params: { id: string } }) {
  // Destructure id from params
  const { id } = params;

  // Fetch the Pokemon details using the id
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  // Handle 404 if Pokemon is not found
  if (!response.ok) {
    notFound();
  }

  const pokemon: Pokemon = await response.json();

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-6">
      <div className="w-full max-w-4xl">
        <Link href="/" className="bg-gray-800 text-white px-4 py-2 rounded-md text-lg font-semibold hover:bg-gray-700 transition">
          ← Back to Home
        </Link>
      </div>

      <h1 className="text-3xl font-bold mt-4 mb-6">Pokemon Details</h1>

      <div className="bg-gray-800 shadow-lg rounded-lg p-6 max-w-4xl w-full flex flex-col md:flex-row items-center gap-8">
        <div className="flex-shrink-0 bg-gray-700 p-4 rounded-lg">
          <Image
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="w-64 h-64"
            width={256}
            height={256}
          />
        </div>

        <div className="flex flex-col w-full">
          <h2 className="text-3xl font-bold capitalize text-yellow-400">{pokemon.name}</h2>
          <p className="text-gray-300 mb-4">Base Experience: {pokemon.base_experience}</p>

          <div>
            <h3 className="text-xl font-semibold text-gray-200">Abilities</h3>
            <ul className="flex flex-wrap gap-2 mt-2">
              {pokemon.abilities.map((item, index) => (
                <li key={index} className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm">
                  {item.ability.name} {item.is_hidden ? "(Hidden)" : ""}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-200">Types</h3>
            <ul className="flex gap-3 mt-2">
              {pokemon.types.map((item, index) => (
                <li key={index} className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                  {item.type.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-200">Stats</h3>
            <ul className="grid grid-cols-2 gap-3 mt-2 text-sm">
              {pokemon.stats.map((item, index) => (
                <li key={index} className="border rounded-md p-2 bg-gray-700 text-gray-300">
                  <span className="font-medium">{item.stat.name}: </span>
                  {item.base_stat}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-200">Moves</h3>
            <ul className="flex flex-wrap gap-2 mt-2">
              {pokemon.moves.slice(0, 5).map((item, index) => (
                <li key={index} className="bg-green-500 text-gray-900 px-3 py-1 rounded-full text-sm">
                  {item.move.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}