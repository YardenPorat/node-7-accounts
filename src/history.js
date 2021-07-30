const connectedKnex = require('./knex-connector');

async function addHistoryRecord(req) {
    const record = {
        method_type: req.method,
        url: req.url,
        body: JSON.stringify(req.body),
    };
    return connectedKnex('history').insert(record);
}

module.exports = addHistoryRecord;
