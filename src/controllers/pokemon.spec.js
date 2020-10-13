import {pokemonController} from './pokemon';
import {searchInList} from "../services/pokemon";

jest.mock('../services/pokemon', () => ({
  searchInList: jest.fn(),
}));

describe('Pokemon controller', () => {
  const json = jest.fn();
  const status = jest.fn(() => ({json}));
  const res = {status};
  afterEach(() => {
    jest.clearAllMocks();
  })
  it('Should response with data and status 200 when request is success', async () => {
    const POKEMONS_RESULT = [{
      name: 'pikachu'
    }];
    const req = {
      query: {
        name: 'pikachu',
      },
      httpClient: () => {},
    };
    searchInList.mockImplementation(() => Promise.resolve(POKEMONS_RESULT));
    await pokemonController(req, res);
    expect(searchInList).toHaveBeenCalled();
    expect(status).toHaveBeenCalledWith(200);
    expect(json).toHaveBeenCalledWith({pokemons: POKEMONS_RESULT});
  });

  it('Should response Bad Request when name is not present in query params', async () => {
    const req = {
      query: {},
    };
    await pokemonController(req, res);
    expect(searchInList).not.toHaveBeenCalled();
    expect(status).toHaveBeenCalledWith(400);
    expect(json).toHaveBeenCalledWith({message: 'Bad Request'});
  });

  it('Should return some error when service response with error', async () => {
    const ERROR_RESULT = {
      message: 'not found',
      status: 404
    }
    const req = {
      query: {
        name: 'pikachu',
      },
      httpClient: () => {},
    };
    searchInList.mockImplementation(() => Promise.reject(ERROR_RESULT));
    await pokemonController(req, res);
    expect(searchInList).toHaveBeenCalled();
    expect(status).toHaveBeenCalledWith(404);
    expect(json).toHaveBeenCalledWith({message: ERROR_RESULT.message});
  });
})