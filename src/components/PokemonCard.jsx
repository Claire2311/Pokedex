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

export default PokemonCard;
