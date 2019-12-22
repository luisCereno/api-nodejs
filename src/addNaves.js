const redis = require('redis');
const express = require('express');
const getNaves = require('./getNaves');

const app = express();

//Redis
const client = redis.createClient(6379, '127.0.0.1');

app.post('/', async (req, res) => {
    const result = await getNaves();
    // result.map(result => console.log('aaaaaaaaaaaaaa'+ result[0].name))
    for (let i = 0; i < result.length; i++) {
        const element = result[i];
        for (let j = 0; j < result.length; j++) {
            console.log('aer', element[j].name );
        }
    }
    
    // result.forEach(element => {
    //     console.log("respuestsa del post :", element)
    //     client.set(element.name, JSON.stringify(element), redis.print);
    // });

    res.status(200).json({
        ok: true,
        mensaje: 'Se agregaron las naves correctamente'
    });
});

module.exports = app;