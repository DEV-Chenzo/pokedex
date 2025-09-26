

function pokemonToHtml(pokemon) {
  return`
        <li class="pokemon ${pokemon.type}">
            <span class="name">${pokemon.name}</span>
            <span class="number">#${pokemon.numberId}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
    `;
}

const listPokemons = document.getElementById("pokemonList");

pokeApi.getPokemons().then((pokemons = []) => {
  let requestPokemon = pokemons.map(pokemonToHtml).join("");
  listPokemons.innerHTML = requestPokemon;
});
