const { Schema, model } = require('mongoose');
const PokeSchema = Schema({
    number: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    type1: {
        type: String,
        required: true
    },
    type2: {
        type: String,
        
    },
    
});
module.exports = model('Pokemon', PokeSchema);