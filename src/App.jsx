import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";
import PropTypes from "prop-types";

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

// PokemonCard.propTypes = {
//   pokemonList: PropTypes.arrayof({
//     name: PropTypes.string.isRequired,
//     imgSrc: PropTypes.string.isRequired,
//   }).isRequired,
// };

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const increment = () => {
    if (pokemonIndex - 1 < 0) {
      setPokemonIndex = 0;
    } else {
      setPokemonIndex(pokemonIndex - 1);
    }
  };

  const decrement = () => {
    if (pokemonIndex + 1 > pokemonList.length - 1) {
      setPokemonIndex = pokemonList.length - 1;
    } else {
      setPokemonIndex(pokemonIndex + 1);
    }
  };

  return (
    <div>
      <div>
        <PokemonCard
          name={pokemonList[pokemonIndex].name}
          imgSrc={pokemonList[pokemonIndex].imgSrc}
        />
      </div>

      <button onClick={increment}>Précédent</button>
      <button onClick={decrement}>Suivant</button>
    </div>
  );
}

export default App;
