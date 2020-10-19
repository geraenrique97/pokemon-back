/**
 * Transfom to PascalCase and remove middle dash. 
 * @param  {string} value
 */
export const normalizeString = (value) =>
  value.charAt(0).toUpperCase() + value.slice(1).split('-').join(' ');
