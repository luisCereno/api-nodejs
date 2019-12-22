const axios = require('axios');
const redis = require('redis');

//Redis
const client = redis.createClient(6379, '127.0.0.1');

var naves = [];

const axiosNaves = async (url) => {
    const defaultUrl = 'https://swapi.co/api/starships/?page=1';
    const respuesta = await axios.get(url || defaultUrl);
    
    if (respuesta.data.next) {
        await axiosNaves(respuesta.data.next);
    } 

    naves.push(respuesta.data.results);
    
    return naves;
}

const getNaves = async function () {
    const respuesta = await axiosNaves();
    return respuesta;
}

module.exports = getNaves;