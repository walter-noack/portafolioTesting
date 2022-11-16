require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { stringConnection } = require('./database/config');

const app = express();

app.use(cors());
app.use(express.json());

stringConnection();

//RUTAS
app.use('/api/user', require('./routes/user.route'));


app.listen(process.env.PORT, () =>{
    console.log('El servidor está corriendo en el puerto: '+ process.env.PORT)
});

