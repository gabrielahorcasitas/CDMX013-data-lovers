
import data from './data/pokemon/pokemon.js';

import { generatorHTML, anotherExample } from './data.js';

console.log(anotherExample());
let pokemonList = data["pokemon"];

document.getElementById('pokemonDiv').appendChild(generatorHTML(pokemonList));




//console.log(data);
