import {getBaseURL} from '../utils/URLs';

const POKE_ENDPOINT = `${getBaseURL('POKEMON_API')}/pokemon`;
/**
 * @name getPokemonByName
 * @description fetch data about pokemon like abilities, form and another features.
 * @param  {object} httpClient
 * @param  {string} searchKey
 */
export const getPokemonByName = (httpClient, searchKey) => 
  httpClient.get(`${POKE_ENDPOINT}/${searchKey}`);

/**
 * @name getPokemonList
 * @description fetch a list of pokemons with name and url to retrieve more data.
 * @param  {object} httpClient
 * @return {object}
 */
export const getPokemonList = (httpClient) => {
  const limit = 1050;
  const offset = 0;
  return httpClient.get(`${POKE_ENDPOINT}?offset=${offset}&limit=${limit}`);
};

