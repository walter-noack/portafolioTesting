const { Router } = require('express');
const { createPokemon, getPokemon, getType, getName } = require('../controller/poke.controller')
const router = Router();

router.post('/', createPokemon);
router.get('/', getPokemon);
router.get('/getType/:type1', getType); 
router.get('/getName/:name', getName);


module.exports = router;