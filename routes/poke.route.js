const { Router } = require('express');
const { createPokemon, getPokemon } = require('../controller/poke.controller')

const router = Router();

router.post('/', createPokemon);
router.get('/', getPokemon);

module.exports = router;