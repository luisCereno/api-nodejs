const redis = require('redis');
const client = redis.createClient(6379 , '127.0.0.1');
const util = require('util');
const getAsync = util.promisify(client.get).bind(client);



const obtener = async (filter) => {
    // client.get(filter, function(err, res) {
    //     return res;
    // });
    const founds = await getAsync(filter);
    return founds
}

module.exports = obtener;