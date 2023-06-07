import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const [pokemonName, setPokemonName] = useState(0);

  const handleOnClick = (e) => {
    setPokemonName(e.target.value);
  };

  return (
    <div>
      <NavBar pokemonList={pokemonList} onClick={handleOnClick} />
      <div>
        {pokemonList
          .filter((elem) => elem.name === pokemonName)
          .map((pokemon) => (
            <PokemonCard
              key={pokemon.name}
              name={pokemon.name}
              imgSrc={pokemon.imgSrc}
              // name={pokemonList[pokemonIndex].name}
              // imgSrc={pokemonList[pokemonIndex].imgSrc}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
