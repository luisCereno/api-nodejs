//Requires
// const redis = require('redis');
const express = require('express');
const bodyParser = require('body-parser');

//Puerto
const PORT = 3000;

// //Redis
// const client = redis.createClient(6379,'127.0.0.1');

//Funciones
const addNaves = require('./src/addNaves');
const obtenerNaves = require('./src/obtener');

//Inicializar variables
const app = express();

//Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Rutas
app.use('/add', addNaves);
app.post('/obtener', obtenerNaves);

//Escuchar peticiones
app.listen(PORT, () => {
    console.log(`Express server puerto ${PORT}: \x1b[32m%s\x1b[0m`, 'online');
});