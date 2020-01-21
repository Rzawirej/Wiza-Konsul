const jwt = require('jsonwebtoken');
module.exports = function (req, res, next) {
    const token = req.header('x-auth-token');
    if (!token) res.status(401).send('Acces denied. No token provided.');

    try {
        req.user = jwt.verify(token, 'zmienZebyByloWEnv');
        next();
    } catch (ex) {
        res.status(400).send('Invalid token.');
    }
}