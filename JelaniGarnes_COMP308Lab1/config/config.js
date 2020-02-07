//using NODE_ENV we load the configuration file
module.exports = require('./env/' + process.env.NODE_ENV + '.js');