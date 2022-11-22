const { Router } = require('express');
const { createPokemon, getPokemon, getType, updatePokemon, deletePokemon } = require('../controller/poke.controller')
const router = Router();

router.post('/', createPokemon);
router.get('/', getPokemon);
router.get('/getType/:type1', getType); 
router.put('/:_id', updatePokemon);
router.delete('/:_id', deletePokemon);

module.exports = router;