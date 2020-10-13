import {getPokemonByName, getPokemonList} from '../providers/pokemon';
import {normalizeString} from '../utils/helpers';
/**
 * @name getDataByName
 * @description get data about pokemon given a name
 * @param  {object} httpClient
 * @param  {string} name
 * @return {object}
 */
export const getDataByName = async (httpClient, name) => {
  const {
    data:
    {
      sprites: {
        front_default
      }
    }
  } = await getPokemonByName(httpClient, name);
  const normalizedName = normalizeString(name);
  return {img: front_default, normalizedName};
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
