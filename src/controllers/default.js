
export const healthCheckController =  (res) => {
  res.status(200).json({message: 'UP'});
};