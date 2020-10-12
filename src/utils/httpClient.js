import fetch from 'axios';

export const httpClientInterceptor = (req, res, next) => {
  req.httpClient = fetch;
  next();
};
