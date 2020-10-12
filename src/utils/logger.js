import logger from 'morgan';

export const loggerInterceptor = () => {
  return logger('dev');
}