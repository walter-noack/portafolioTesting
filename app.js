const express = require('express');
const cors = require('cors');

const { stringConnection } = require('./database/config');
const pokeModel = require('./models/poke.model');
const { response } = require('express');

const app = express();

app.use(cors());
app.use(express.json());

stringConnection();

//RUTAS
app.use('/api/poke', require('./routes/poke.route'));


app.listen(4000, () =>{
    console.log('El servidor está corriendo en el puerto: '+ 4000)
});
