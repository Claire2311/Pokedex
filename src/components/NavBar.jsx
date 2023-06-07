import { useState } from "react";

const NavBar = ({ pokemonList, onClick }) => {
  return (
    <div>
      {pokemonList.map((pokemon) => (
        <button key={pokemon.name} value={pokemon.name} onClick={onClick}>
          {pokemon.name}
        </button>
      ))}
    </div>
  );
};

export default NavBar;
