import { getPokemon } from "@/lib/pokemonAPI";
import Image from "next/image";
import { PokemonImage } from "@/components/PokemonImage";
import { Progress } from "@/components/ui/progress";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
// localhost:3000/pikachu

// pokemonName

// pokemonName = "pikachu" -> show the Pikachu page

// Vercel CLI -> We can fully deploy our application using the command line
// If things are breaking for you (for any reason), go check out how to
// deploy from github.

export default async function PokemonPage({
  params,
}: {
  params: { pokemonName: string };
}) {
  // Object destructuring
  const { pokemonName } = params;
  // pikachu
  // get the API data for pikachu
  const pokemonObject = await getPokemon(pokemonName);

  console.log(pokemonObject);

  return (
    <>
      <NavBar />
      <div className="w-full grid grid-cols-1 text-center justify-center px-10 py-10">
        <h1 className="text-4xl text-bold pt-4">
          {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
        </h1>
        <div
          className="m-4"
          style={{ position: "relative", width: "300px", height: "300px", margin: "auto", }}
        >
          <PokemonImage
            image={
              pokemonObject.sprites.other["official-artwork"].front_default
            }
            name={pokemonName}
          />
        </div>
        <h3>Weight: {pokemonObject.weight}</h3>
        <div className="flex-col">
          {pokemonObject.stats.map((statObject: any) => {
            const statName = statObject.stat.name;
            const statValue = statObject.base_stat;

            return (
              <div
                className="flex items-stretch"
                style={{ width: "500px", margin: "auto" }}
                key={statName}
              >
                <h3 className="p-3 w-2/4">
                  {statName}: {statValue}
                </h3>
                <Progress className="w-2/4 m-auto" value={statValue} />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
