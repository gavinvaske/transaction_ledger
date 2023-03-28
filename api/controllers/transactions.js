const router = require('express').Router();

router.get('/', (request, response) => {
    console.log('You hit the GET /transactions endpoint');
    
    return response.send('TODO: Build GET /transactions');
});

router.post('/', (request, response) => {
    console.log('You hit the POST /transactions endpoint');
    
    return response.send('yay');
});

module.exports = router;