import { useState } from "react";

const NavBar = ({ pokemonList, pokemonIndex, setPokemonIndex }) => {
  const increment = () => {
    if (pokemonIndex - 1 < 0) {
      setPokemonIndex(0);
    } else {
      setPokemonIndex(pokemonIndex - 1);
    }
  };

  const decrement = () => {
    if (pokemonIndex + 1 > pokemonList.length - 1) {
      setPokemonIndex(pokemonList.length - 1);
    } else {
      setPokemonIndex(pokemonIndex + 1);
    }
  };

  // const [but, setBut] = useState(pokemonList);

  return (
    <div>
      <button onClick={increment}>Précédent</button>
      <button onClick={decrement}>Suivant</button>
    </div>
  );
};

export default NavBar;
