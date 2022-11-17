const Pokemon = require('../models/poke.model');

const createPokemon = (req, res) => {
    const pokemon = new Pokemon(req.body);

    pokemon.save().then(() => {
        res.json({
            ok: true,
            pokemon
        });
    }).catch(() => {
        res.json({
            ok: false,
            msg: 'Falló la creación de Pokemon'
        });
    })
}

const getPokemon = (req, res) => {
    res.json({
        ok: true,
        msg: 'Hola Mundo'
    })
};


module.exports = {
    getPokemon,
    createPokemon
}