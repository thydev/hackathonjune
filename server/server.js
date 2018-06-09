const port = 5000;
const baseUrl = '/api/';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Databaes / Model Section
require('./config/mongoose');
// End of Model Section

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// Allow cross origin 
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// App routes
require('./config/routes')(app);

app.listen(port, () => console.log(`Listening to port: ${port}`));