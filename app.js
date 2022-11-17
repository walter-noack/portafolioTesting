const express = require('express');
const cors = require('cors');

const { stringConnection } = require('./database/config');

const app = express();

app.use(cors());
app.use(express.json());

stringConnection();

//RUTAS
app.use('/api/poke', require('./routes/poke.route'));


app.listen(process.env.PORT, () =>{
    console.log('El servidor está corriendo en el puerto: '+ process.env.PORT)
});

