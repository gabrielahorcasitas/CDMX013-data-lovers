//import data from './data/pokemon/pokemon.js'; no hace falta porque ya se importo desde main y se vuelve la pokemonList
import {generatorHTML,pokemonList} from './main.js';
// Filtrado de tipo
  export const filterByType =(condition) => {
          let filtered = [];
          for (let i = 0; i < pokemonList.length; i++){
            let arrayTypes = pokemonList[i].type;
            for (var j = 0; j < arrayTypes.length; j++) {
              if(arrayTypes[j] == condition.toLowerCase()){
                  filtered.push(pokemonList[i]);
                }
              }
            }
            return filtered;
          }
//Filtrado por Region
//export default data;
export const filterByRegion =(condition)=>{
  let filterRegion = pokemonList.filter(pokemon => pokemon.generation.name == condition.toLowerCase());
  return filterRegion;
}
  /* let regionFilter= pokemonList;
  let filterRegion = [];
  for (let i = 0; i < regionFilter.length; i++) {
    if (regionFilter[i].generation.name == condition) {
        filterRegion.push(regionFilter[i]);
    }
  }
  console.log( filterRegion);*/
  //Estas son segundas opciones
/*  export const filteredOut = (filterValue, pokemonList, pokeProperty) =>{
  let filteredPokemon = [];
  if(pokeProperty == "region"){
    filteredPokemon = pokemonList.filter((current) => {
      return current.generation.name == filterValue.toLowerCase();
    });
  }
  return filteredPokemon;
}*/
