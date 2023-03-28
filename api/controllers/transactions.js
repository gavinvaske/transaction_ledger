const router = require('express').Router();

const sampleTransactions = [
    {description: 'transaction #1', price: '10.50'},
    {description: 'transaction #2', price: '20.95'},
    {description: 'transaction #3', price: '30.95'},
    {description: 'transaction #4', price: '40.95'}
]

router.get('/', (request, response) => {
    return response.send(sampleTransactions);
});

router.post('/', (request, response) => {
    return response.send('TODO: Implement POST /transactions');
});

module.exports = router;