//Requires
const express = require('express');
const bodyParser = require('body-parser');

//Puerto
const PORT = 3000;

//Funciones
const addNaves = require('./src/addNaves');
const obtener = require('./src/obtener');

//Inicializar variables
const app = express();

//Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Escuchar peticiones
app.listen(PORT, () => {
    console.log(`Express server puerto ${PORT}: \x1b[32m%s\x1b[0m`, 'online');
});

//Agregar naves a redis
app.post('/add', async (req, res) => {
    await addNaves();

    res.status(200).json({
        ok: true,
        mensaje: 'Se agregaron las naves correctamente'
    });
});

//Filtrar
app.post('/obtener', async (req, res) => {
    const { filter } = req.body;
    res.json(JSON.parse(await obtener(filter['value'])));
});
