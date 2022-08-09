import data from '../src/data/pokemon/pokemon.js';
import dataMock from './mockData.js'
import {filterByRegion, filterByType/*, searchByName*/} from '../src/data.js'; 


  it('debería ser un objeto', () => {
    expect(typeof data).toBe('object');
  });

describe('dataMock', () => {
  it('debería contener el nombre del pokemon', ()=>{
    const dataMockIndexZero = dataMock.pokemon[0];
    expect(dataMockIndexZero).toEqual(expect.objectContaining({name : 'bulbasaur'}));
  });
  
  it('debería contener el número del pokemon', () =>{
    const dataMockIndexTwo = dataMock.pokemon[2];
    expect(dataMockIndexTwo).toEqual(expect.objectContaining({num : '003'}));
  })

  it('debería retornar {} si se pasa length del objeto', () =>{
    const dataMockIndexFive = dataMock.pokemon[5];
    expect(dataMockIndexFive).toEqual(expect.objectContaining({}));
  })

});

describe('filterByRegion', () => {
  it('debería ser una función', () => {
    expect(typeof filterByRegion).toBe('function');
  });

  test('debería retornar [] al no encontrar coincidencias con la región ', () => {
    const runFilterRegion = filterByRegion('johto', dataMock.pokemon)
    expect(runFilterRegion).toEqual([]);
  })

  it('debería filtrar por kanto', () =>{
    const runFilterRegion = filterByRegion('kanto', dataMock.pokemon)
    expect(runFilterRegion.length).toBe(3)
  });

  test('debería retornar un arreglo de pokemon de la región kanto', () =>{
    const runFilterRegion = filterByRegion('kanto', dataMock.pokemon)
    expect(runFilterRegion).toEqual(dataMock.pokemon)
    });

});

describe('filterByType', () => {

  test('debería ser una función', () => {
    expect(typeof filterByType).toBe('function');
  });

  test('filtrar por grass',()=>{
    const runFilterType = filterByType('grass',dataMock.pokemon)
    expect(runFilterType.length).toBe(3)
  })

  test('filtrar por fire',()=>{
    const runFilterType = filterByType('fire',dataMock.pokemon)
    expect(runFilterType.length).toBe(0)
  })

  test('debería retornar [] al no encontrar coincidencias con el tipo grass', () => {
    const runFilterType = filterByRegion('fire', dataMock.pokemon)
    expect(runFilterType).toEqual([]);
  })

});


 /* describe('searchByName', () => {

test('debería ser una función', () => {
    expect(typeof searchByName).toBe('function');
  });

  test('filtrar por input de name',()=>{
    const runFilterName = searchByName('bulbasaur',dataMock.pokemon)
    expect(runFilterName.length).toBe(1)
  })

  test('filtrar por type debería regresar 0',()=>{
    const runFilterName = searchByName('fire',dataMock.pokemon)
    expect(runFilterName.length).toBe(0)
  })

});*/
