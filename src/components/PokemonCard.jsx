function PokemonCard() {
  const pokemon = pokemonList[0];

  if (pokemon.imgSrc != null) {
    return (
      <figure>
        <img src={pokemon.imgSrc} />
        <figcaption>{pokemon.name}</figcaption>
      </figure>
    );
  } else {
    return <p>???</p>;
  }
}

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

export default PokemonCard;
