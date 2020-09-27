// Tell webpack to compile the "acme" package (https://www.npmjs.com/package/next-transpile-modules)
const withTM = require('next-transpile-modules')(['@acme']);

module.exports = withTM();
