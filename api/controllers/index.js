const router = require('express').Router();

router.get('/', (request, response) => {
    return response.send('The service is alive and healthy!')
});

module.exports = router;