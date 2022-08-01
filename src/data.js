// estas funciones son de ejemplo
import data from './data/pokemon/pokemon.js';

export const example = () => {
  return example;
};

export const anotherExample = () => {
  return 'OMG';
};

export const generatorHTML = (pokemonList) => {
let pokecontainer = document.createElement('div');
  for(let i=0; i<pokemonList.length; i++){
    let pokemonObject = pokemonList[i];

    let pokemonImageDiv = document.createElement('div');
    let pokemonNameDiv = document.createElement('div');

    pokemonImageDiv.innerHTML = "<img src=" + pokemonObject["img"] + " width=\"100px\" height=\"100px\">";
    pokemonNameDiv.innerHTML = pokemonObject["name"];
    pokecontainer.append(pokemonImageDiv, pokemonNameDiv)

  }
return pokecontainer
}

//export default data;
