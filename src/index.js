const express = require('express');
const path = require('path');
const addHistoryRecord = require('./history');

const accountRepo = require('./account-repo');

const port = 8080;

const app = express();

// to server static pages
app.use(express.static(path.join(__dirname, '/')));

// for POST json
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.get('/accounts', async (req, res) => {
    const accounts = await accountRepo.getAllAccounts();
    res.status(200).json({ accounts });
    await addHistoryRecord(req);
});

app.get('/accounts/:accountId', async (req, res) => {
    const accountId = req.params.accountId;
    const account = await accountRepo.getAccountById(accountId);
    res.status(200).json({ account });
    await addHistoryRecord(req);
});

app.delete('/accounts/:accountId', async (req, res) => {
    try {
        const accountId = req.params.accountId;
        const result = await accountRepo.deleteAccount(accountId);
        res.status(200).json({
            res: 'success',
            url: `localhost:8080/accounts/${accountId}`,
            result,
        });
        await addHistoryRecord(req);
    } catch (e) {
        res.status(400).send({
            status: 'fail',
            message: e.message,
        });
    }
});

app.put('/accounts/:accountId', async (req, res) => {
    try {
        const accountId = req.params.accountId;
        const account = req.body;
        const result = await accountRepo.updateAccount(account, accountId);
        res.status(201).json({
            res: 'success',
            url: `localhost:8080/accounts/${account.ID}`,
            result,
        });
        await addHistoryRecord(req);
    } catch (e) {
        res.status(400).send({
            status: 'fail',
            message: e.message,
        });
    }
});

app.post('/accounts', async (req, res) => {
    try {
        const account = req.body;
        const result = await accountRepo.addAccount(account);
        res.status(201).json({
            res: 'success',
            url: `localhost:8080/accounts`,
            result,
        });
        await addHistoryRecord(req);
    } catch (e) {
        res.status(400).send({
            status: 'fail',
            message: e.message,
        });
    }
});

app.listen(port, () => console.log(`Listening to port ${port}`));
