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

const sprawy = require('./src/routes/sprawy');
const konta = require('./src/routes/konta');
const rodzajeDokumentu = require('./src/routes/rodzajeDokumentu');
const decyzje = require('./src/routes/decyzje');

app.set('port', 5001);
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

app.use('/api/sprawy', sprawy);
app.use('/api/konta', konta);
app.use('/api/rodzajeDokumentu', rodzajeDokumentu);
app.use('/api/decyzje', decyzje);

let server = app.listen(app.get('port'), () => {
    var port = server.address().port;
    console.log('All run on port: ' + port)
})