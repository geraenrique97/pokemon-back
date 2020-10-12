import fetch from 'axios';

/**
 * @description middleware that setup and inject HTTP client to connect external APIs
 * @param  {object} req
 * @param  {object} res
 * @param  {Function} next
 */
export const httpClientInterceptor = (req, res, next) => {
  req.httpClient = fetch;
  next();
};
