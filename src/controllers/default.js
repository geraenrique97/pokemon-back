/**
 * Controller for check status of service
 * @param  {object} res
 */
export const healthCheckController =  (_, res) => {
  res.status(200).json({message: 'UP'});
};