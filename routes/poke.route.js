const { Router } = require('express');
const { createPokemon, getPokemon, updatePokemon } = require('../controller/poke.controller')

const router = Router();

router.post('/', createPokemon);
router.get('/', getPokemon);
/* router.get('/type', getType); */
router.put('/:_id', updatePokemon);

module.exports = router;