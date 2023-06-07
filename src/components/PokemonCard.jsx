import PropTypes from "prop-types";
function PokemonCard({ name, imgSrc }) {
  if (imgSrc != null) {
    return (
      <figure>
        <img src={imgSrc} />
        <figcaption>{name}</figcaption>
      </figure>
    );
  } else {
    return (
      <figure>
        <p>???</p>
        <figcaption>{name}</figcaption>
      </figure>
    );
  }
}

PokemonCard.propTypes = {
  pokemonList: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
  }),
};

export default PokemonCard;
