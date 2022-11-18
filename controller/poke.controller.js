const { response } = require('express');
const Pokemon = require('../models/poke.model');

const createPokemon = (req, res) => {
    const pokemon = new Pokemon(req.body);

    pokemon.save().then(() => {
        res.json({
            msg: 'Pokemon agregado a la Pokedex',
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


const updatePokemon = async (req, res) => {
    console.log(req.body);
    let pokemon = await Pokemon.updateOne(
        req.params,
        { $set: req.body }
    )
    .then(result=>{
        res.status(200).json({
            message: 'La información del Pokemon ha sido actualizada',
        })
    }).catch(err => {
        res.status(500).json({
            error: err
        })
    })
    
}

module.exports = {
    getPokemon,
    createPokemon,
    updatePokemon
}