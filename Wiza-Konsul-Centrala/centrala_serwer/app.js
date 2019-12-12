//require('babel-core/register');

require('./src/data/db')
const Joi = require('joi');
Joi.ObjectId = require('joi-objectid')(Joi);


const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');


app.set('port', 5000);
app.use(cors({
    origin: true,
    credentials: true
}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(morgan('tiny'));
app.use(helmet());



let server = app.listen(app.get('port'), () => {
    var port = server.address().port;
    console.log('All run on port: ' + port)
})