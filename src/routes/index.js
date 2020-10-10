import express from 'express';
let router = express.Router();

router.get('/', async function(req, res) {
  try {
    const {data} = await req.httpClient
        .get('https://pokeapi.co/api/v2/pokemon/ditto');
    res.status(200).json(data);

  } catch (err) {
    res.status(err);
  }
});

export default router;
