import Link from "next/link";

// pikachu, -> localhost:3000/pikachu

interface PokemonCardProps {
  name: string;
}

// <PokemonCard name="pikachu" />

export function PokemonCard({ name }: PokemonCardProps) {
  return (
    <Link
      href={name}
      className="group rounded-lg border border-transparent py-4 px-4 transition-colors dark:border-gray-500 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 "
      key={name + "Card"}
    >
      <h2 className={`text-2xl font-semibold text-center`}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </h2>
    </Link>
  );
}
