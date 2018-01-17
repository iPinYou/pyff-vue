var cooking = require('cooking');
var gen = require('../../build/gen-single-config');

cooking.set(gen(__dirname, 'PyTable', '_index.js'));

module.exports = cooking.resolve();
