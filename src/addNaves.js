const redis = require('redis');
const express = require('express');
const getNaves = require('./getNaves');

const app = express();

//Redis
const client = redis.createClient(6379, '127.0.0.1');

app.post('/', async (req, res) => {
    const result = await getNaves();
    result.forEach(element => {
        client.set(element.name, JSON.stringify(element), redis.print);
    });
});

module.exports = app;