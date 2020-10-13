import {getDataByName, searchInList} from "../services/pokemon";
import HttpError from "http-errors";
import httpStatus from "http-status";

/**
 * @name pokemonController
 * @description retrieves pokemons with name passed as param.
 * @param  {} req express request
 * @param  {} res express response
 * @return {}
 */
export const pokemonController = async (req, res) => {
  const {name} = req.query;
  try {
    if (!name) throw new HttpError.BadRequest();
    const pokemons = await searchInList(req.httpClient, name);
    let results = [];
    for (const pokemon of pokemons) {
      const data = await getDataByName(req.httpClient, pokemon.name);
      results = [...results, {...pokemon, ...data}];
    }

    res.status(httpStatus.OK).json({pokemons: results});
  } catch (error) {
    res.status(error.status || httpStatus.INTERNAL_SERVER_ERROR).json({
      message: error.message || httpStatus[500]
    });
  }
};