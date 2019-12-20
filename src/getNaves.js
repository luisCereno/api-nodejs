const axios = require('axios');
const redis = require('redis');

//Redis
const client = redis.createClient(6379, '127.0.0.1');

const getNaves = async function (req, res) {
    const respuesta = await axios.get('https://swapi.co/api/starships/');
    const { results } = respuesta.data;
    return results;
}

module.exports = getNaves;