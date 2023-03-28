const express = require('express');
const cors = require('cors')

const defaultPort = 8080;
const PORT = process.env.PORT || defaultPort;

const app = express();

app.use(cors());

app.use('/', require('./controllers/index'));
app.use('/transactions', require('./controllers/transactions'));

app.listen(PORT, () => {
    console.log(`Server started listening on PORT ${PORT}. Visit http://localhost:${PORT} in your browser.`)
})