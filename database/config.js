const mongoose = require('mongoose');

const stringConnection = async() => {
    try {
        await mongoose.connect(process.env.DB_CNN)
        console.log('Ready con la BBDD')
    } catch(error) {
        console.log(error);
        throw new Error('Falló la conexión');
    }
}

module.exports = {
    stringConnection
}