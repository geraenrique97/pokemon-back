import {getPokemonByName, getPokemonList} from "../providers/pokemon";
/**
 * @name getDataByName
 * @description get data about pokemon given a name
 * @param  {object} httpClient
 * @param  {string} name
 * @return {object}
 */
export const getDataByName = async (httpClient, name) => {
  const {data} = await getPokemonByName(httpClient, name);
  return data;
};

/**
 * @name searchInList
 * @description search pokemons with search key in a list and returns coincidences
 * @param  {object} httpClient
 * @param  {string} searchKey
 * @return {object}
 */
export const searchInList = async (httpClient, searchKey) => {
  const {data: {results}} = await getPokemonList(httpClient);
  const pokemons = results.filter(({name}) => name.includes(searchKey));
  return pokemons;
};
