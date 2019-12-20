const redis = require('redis');
const client = redis.createClient(6379, '127.0.0.1');

const obtener = (req, res, next) => {
    const { filter } = req.body;
    console.log(filter);

    client.get(filter.value, function(err, reply) {
        // res.json(JSON.parse(reply));
    });
};

module.exports = obtener;