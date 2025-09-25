function covertPokemonTypesToLi(pokemonTypes) {
  return pokemonTypes
    .map(
      (typeSlot) =>
        `<li class="type ${typeSlot.type.name}">${typeSlot.type.name}</li>`
    )
    .join(" ");
}

function pokemonToHtml(pokemon) {
  return `
    <li class="pokemon">
          <p class="name">${pokemon.name}</p>
          <p class="number">#${pokemon.id}</p>

          <div class="detail">
            <ol class="types">
              ${covertPokemonTypesToLi(pokemon.types)}
            </ol>

            <img
              src="${pokemon.sprites.other.dream_world.front_default}"
              alt="${pokemon.name}"
            />
          </div>
        </li>
  `;
}

const listPokemons = document.getElementById("pokemonList");

pokeApi.getPokemons().then((pokemons = []) => {
  let requestPokemon = pokemons.map(pokemonToHtml).join("");
  listPokemons.innerHTML = requestPokemon;
});
