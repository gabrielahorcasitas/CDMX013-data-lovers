
import data from './data/pokemon/pokemon.js';

import { generatorHTML, anotherExample } from './data.js';

console.log(anotherExample());
let pokemonList = data["pokemon"];

//función generator le doy como parametros el div pokemonDiv y la pokemonList
generatorHTML(document.getElementById('pokemonDiv'), pokemonList);

