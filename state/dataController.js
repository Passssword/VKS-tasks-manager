const fs = require('fs');
const path = require('path');

module.exports.getData = function () { return fs.readFileSync( './state/config.json' ) }