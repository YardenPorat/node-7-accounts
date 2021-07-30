// emp-repo.js
const connectedKnex = require('./knex-connector');

function getAllAccounts() {
    return connectedKnex('accounts').select('*');
}

function getAccountById(id) {
    return connectedKnex('accounts').select('*').where('id', id).first();
}

function addAccount(accounts) {
    return connectedKnex('accounts').insert(accounts);
}

function updateAccount(account, id) {
    const now = new Date().toISOString().slice(0, 19).replace('T', ' ');
    accounts = { ...account, last_updated: now };
    return connectedKnex('accounts').where('id', id).update(accounts);
}

function deleteAccount(id) {
    return connectedKnex('accounts').where('id', id).del();
}

module.exports = {
    getAccountById,
    getAllAccounts,
    addAccount,
    updateAccount,
    deleteAccount,
};
