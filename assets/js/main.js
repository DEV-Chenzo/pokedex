function pokemonToHtml(pokemon) {
  return `
    <li class="pokemon">
          <p class="name">${pokemon.name}</p>
          <p class="number">#001</p>
          <div class="detail">
            <ul class="types">
              <li class="type">grama</li>
              <li class="type">veneno</li>
            </ul>

            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
              alt="${pokemon.name}"
            />
          </div>
        </li>
  `;
}

const listPokemons = document.getElementById("pokemonList");

pokeApi.getPokemons().then((pokemons = []) => {
  listPokemons.innerHTML = pokemons.map(pokemonToHtml).join("");
});
