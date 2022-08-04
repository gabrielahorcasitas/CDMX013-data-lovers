import data from '../src/data/pokemon/pokemon.js';
//import {generatorHTML} from '../src/main.js'; //para exportar cosas individuales de un archivo ponerlo entre llaves*

describe('data', () => {
  it('debería ser un objeto', () => {
    expect(typeof data).toBe('object');
  });

 // it('returns `example`', () => {
 //   expect(example()).toBe('example');
 // });
});


//describe('generatorHTML', () => {
  //it('debería ser una función', () => {
    //expect(typeof generatorHTML).toBe('function');
  //});

 // it('returns `anotherExample`', () => {
 //   expect(anotherExample()).toBe('OMG');
 // });
//});
