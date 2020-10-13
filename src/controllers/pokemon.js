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
    // const response = await getDataByName(req.httpClient, name); //to get more data for item

    res.status(httpStatus.OK).json({pokemons});
  } catch (error) {
    res.status(error.status || httpStatus.INTERNAL_SERVER_ERROR).json({
      message: error.message || httpStatus[500]
    });
  }
};