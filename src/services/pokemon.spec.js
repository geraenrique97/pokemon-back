import {searchInList} from './pokemon';
import {getPokemonList} from '../providers/pokemon';

jest.mock('../providers/pokemon', () => ({
  getPokemonList: jest.fn(),
}));

describe('Pokemon service', () => {
  describe('searchInList method', () => {
    it('Should return matches given a search key when exist in list', async () => {
      const LIST_RESULT = {
        data: {
          results: [
            {name: 'pikachu'},
            {name: 'pikapika'},
            {name: 'doti'},
          ],
        },
      };
      const searchKey = 'pika';
      const EXPECTED = [
        LIST_RESULT.data.results[0],
        LIST_RESULT.data.results[1],
      ];
      getPokemonList.mockImplementation(() => Promise.resolve(LIST_RESULT));
      const received = await searchInList(() => {}, searchKey);
      expect(getPokemonList).toHaveBeenCalled();
      expect(received).toEqual(EXPECTED);
    });
  });
})