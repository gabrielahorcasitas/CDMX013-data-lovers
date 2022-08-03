//import data from './data/pokemon/pokemon.js'; no hace falta porque ya se importo desde main y se vuelve la pokemonList

//pokecontainer es pokemondiv y pokemonlist es la lista de objetos en objeto pokemon
export const generatorHTML = (pokecontainer, pokemonList) => {

  for(let i=0; i<pokemonList.length; i++){
    let pokemonObject = pokemonList[i];

    let pokeIndividual = document.createElement('div');
    pokeIndividual.classList.add("pokemonIndividual");

    let pokemonImageDiv = document.createElement('div');
    let pokemonNameDiv = document.createElement('div');
    pokemonNameDiv.classList.add("namePokemon")

    pokemonImageDiv.innerHTML = "<img src=" + pokemonObject["img"] + " width=\"150px\" height=\"150px\">";
    pokemonNameDiv.innerHTML = pokemonObject["name"];
    pokeIndividual.append(pokemonImageDiv, pokemonNameDiv)
    pokecontainer.append(pokeIndividual);

  }
 console.log (typeof generatorHTML);
return pokecontainer//---no hace falta porque es redundante, pokecontainer es el pokemon div que en un inicio de puse como parámetro

}


//export default data;
