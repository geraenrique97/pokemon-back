import express from 'express';
import {pokemonController} from '../controllers/pokemon';
import {healthCheckController} from '../controllers/default';

let router = express.Router();

router.get('/health_check', healthCheckController);
router.get('/pokemon', pokemonController);

export default router;
