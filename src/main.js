
import data from './data/pokemon/pokemon.js';
import {filterByRegion,filterByType, searchByName} from './data.js'

let pokemonData= data.pokemon;

//pokecontainer es pokemondiv y pokemonlist es la lista de objetos en objeto pokemon
const generatorHTML = (pokecontainer, pokemonList) => {
  pokecontainer.replaceChildren();
    for(let i=0; i<pokemonList.length; i++){
      let pokemonObject = pokemonList[i];

      let pokeIndividual = document.createElement('div');
      pokeIndividual.classList.add("pokemonIndividual");

      let pokemonImageDiv = document.createElement('div');
          pokemonImageDiv.classList.add("imagePokemon");
      let pokemonNameDiv = document.createElement('div');
          pokemonNameDiv.classList.add("namePokemon");
      let pokemonNumDiv = document.createElement('div');
          pokemonNumDiv.classList.add("numPokemon");
      let pokemonTypeDiv = document.createElement('div');
          pokemonTypeDiv.classList.add("typePokemon");

      pokemonImageDiv.innerHTML = "<img src=" + pokemonObject["img"] + " width=\"120px\" height=\"120px\">";
      pokemonNameDiv.innerHTML = pokemonObject["name"];
      pokemonNumDiv.innerHTML = pokemonObject["num"];
      pokemonTypeDiv.innerHTML = pokemonObject["type"];

      pokeIndividual.append( pokemonNumDiv, pokemonImageDiv, pokemonNameDiv, pokemonTypeDiv);
      pokecontainer.append(pokeIndividual);

    }
  //return pokecontainer//---no hace falta porque es redundante, pokecontainer es el pokemon div que en un inicio de puse como parámetro
  }

//función generator le doy como parametros el div pokemonDiv y la pokemonList
generatorHTML(document.getElementById('pokemonDiv'), pokemonData);

//document.getElementById("filtrate").addEventListener('click', dropdownF);

document.getElementById('region').addEventListener('change',(e)=>{
  if (e.target.value == "Show All") {
    generatorHTML(document.getElementById('pokemonDiv'), pokemonData);
  }else{
    generatorHTML(document.getElementById('pokemonDiv'), filterByRegion(e.target.value, pokemonData));
  }

});

document.getElementById('type').addEventListener('change',(e)=>{
  if (e.target.value == "Show All") {
    generatorHTML(document.getElementById('pokemonDiv'), pokemonData);
  }else{
    generatorHTML(document.getElementById('pokemonDiv'), filterByType(e.target.value, pokemonData));
  }
});

//Esta es una 2da. opcion
/*document.getElementById("region").addEventListener('change',(e)=>{
  let filteredRegion = filteredOut(e.target.value, pokemonList, "region");
  console.log(filteredRegion);

})*/

//funcionalidad para buscador por nombre (search by name)
let inputName = document.getElementById('search');//inicializa acceso a DOM
const searchSubmit = document.getElementById('searchSubmit');

searchSubmit.addEventListener('click', () =>{
  //incluir variable "llena" con .value
  generatorHTML(document.getElementById('pokemonDiv'), searchByName(pokemonData, inputName.value));
});
