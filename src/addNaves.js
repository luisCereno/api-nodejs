const redis = require('redis');
const getNaves = require('./getNaves');

//Redis
const client = redis.createClient(6379, '127.0.0.1');

const axiosNaves = async (req, res) => {
    const result = await getNaves();

    for (let i = 0; i < result.length; i++) {
        const element = result[i];
        for (let j = 0; j < element.length; j++) {
            client.set(element[j].name, JSON.stringify(element[j]), redis.print);
        }
    }
}

module.exports = axiosNaves;