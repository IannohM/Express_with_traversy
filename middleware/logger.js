const moment = require('moment');

const Logger = (req, res, next) => {
    console.log(
        `Requested URL: ${req.protocol}:://${req.get('host')}${req.originalUrl}`
    );
    console.log(`Requested at: ${moment().format()}`);
    next();
};

module.exports = Logger;
