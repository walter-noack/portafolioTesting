const mongoose = require('mongoose');

const stringConnection = async() => {
    try {
        await mongoose.connect('mongodb+srv://admin:adminPortafolio@clusterportafolio.45vxokl.mongodb.net/test')
        console.log('Tai conectao a la Pokedé')
    } catch(error) {
        console.log(error);
        throw new Error('Falló la conexión');
    }
}

module.exports = {
    stringConnection
}