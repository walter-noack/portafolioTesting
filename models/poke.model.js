const { Schema, model } = require('mongoose');
const PokeSchema = Schema({
    number: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    type1: {
        type: String,
        required: true
    },
    type2: {
        type: String,
        
    },
    statBase: {
        type: String,
        
    },
    HP: {
        type: String,
        
    },
    attack: {
        type: String,
        
    },
    defense: {
        type: String,
        
    },
    spAttack: {
        type: String,
        
    },
    spDefense: {
        type: String,
        
    },
    speed: {
        type: String,
        
    },
    generation: {
        type: String,
        
    },
    legendary: {
        type: String,
        
    },

    
});
module.exports = model('Pokemon', PokeSchema);