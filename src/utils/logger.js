import logger from 'morgan';

/**
 * simple logger for results from service
 */
export const loggerInterceptor = () => {
  return logger('dev');
}