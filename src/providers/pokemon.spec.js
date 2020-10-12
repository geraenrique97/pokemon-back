import {getPokemonList} from './pokemon';

describe('Pokemon provider', () => {
  describe('getPokemonList method', () => {
    it('Should do fetch data from endpoint', () => {
      const httpClient = {get: jest.fn()};
      getPokemonList(httpClient);
      expect(httpClient.get).toHaveBeenCalledWith(
        'https://pokeapi.co/api/v2/pokemon?offset=0&limit=1050'
      );
    });
  });
});
