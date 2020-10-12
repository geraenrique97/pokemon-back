
export const BASE_URLs = new Map()
  .set('local', new Map()
    .set('POKEMON_API', 'https://pokeapi.co/api/v2')
  )
  .set('prod', new Map()
    .set('POKEMON_API', 'https://pokeapi.co/api/v2')
  );
/**
 * Gets external urls based on deploy environment
 */
export const getBaseURL = (() => {
  const filteredEnv = BASE_URLs.get(process.env.NODE_ENV);
  return (endpoint) => filteredEnv.get(endpoint);
})();