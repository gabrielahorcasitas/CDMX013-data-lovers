// Filtrado de tipo
    export const filterByType =(condition,pokemonList)=>{
      let filterType = pokemonList.filter(pokemon => pokemon.type[0] == condition.toLowerCase() || pokemon.type[1] == condition.toLowerCase());
      return filterType;
    }

//Filtrado por Region
    export const filterByRegion =(condition,pokemonList)=>{
      let filterRegion = pokemonList.filter(pokemon => pokemon.generation.name == condition.toLowerCase());
      return filterRegion;
    }

//Filtrado por nombre en buscador
    export const searchByName = (pokemonList, inputName) =>{
      let searchName = pokemonList.filter(pokemon => pokemon.name === inputName.toLowerCase());
      return searchName;
    }

//Función de ordenado A-Z
    export const sortAZ = (condition, pokemonList) => {
        function sortName(a,b){
          if (condition === "A-Z"){
            if (a.name < b.name){
              return -1;
            }
            if (a.name > b.name){
              return 1;
            }
          return 0;
          }
        }
      let sortResult = pokemonList.sort(sortName);
      return sortResult;
     }

     //Función de ordenado Z-A
         export const sortZA = (condition, pokemonList) => {
             function sortName1(a,b){
               if (condition === "Z-A"){
                 if (a.name > b.name){
                   return -1;
                 }
                 if (a.name < b.name){
                   return 1;
                 }
               return 0;
               }
             }
           let sortResult1 = pokemonList.sort(sortName1);
           return sortResult1;
          }

      //Función de ordenado descendente #pokedex
              export const sortNumpokedex= (condition, pokemonList) => {
                  function sortNPokedex(a,b){
                    if (condition === "#Pokedex"){
                      if (a.num > b.num){
                        return -1;
                      }
                      if (a.num < b.num){
                        return 1;
                      }
                    return 0;
                    }
                  }
                let sortResult2 = pokemonList.sort(sortNPokedex);
                return sortResult2;
               }

 //Estas son otras opciones

   /*export const filterByType =(condition,pokemonList) => {
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
          }*/

  /* let regionFilter= pokemonList;
  let filterRegion = [];
  for (let i = 0; i < regionFilter.length; i++) {
    if (regionFilter[i].generation.name == condition) {
        filterRegion.push(regionFilter[i]);
    }
  }
  console.log( filterRegion);*/

/*export const filterByRegion = (filterValue, pokemonList, condition) =>{
  let filteredPokemon = [];
  if(condition == "region"){
    filteredPokemon = pokemonList.filter((current) => {
      return current.generation.name == filterValue.toLowerCase();
    });
  }
  return filteredPokemon;
}*/

//export default data
