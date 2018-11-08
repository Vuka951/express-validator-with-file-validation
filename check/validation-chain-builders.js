const check = require('./check');

const buildCheckFunction = locations => (fields, message) => check(fields, locations, message);
module.exports = {
  buildCheckFunction,
  check: buildCheckFunction(['body', 'cookies', 'headers', 'params', 'query', 'files']),
  body: buildCheckFunction(['body']),
  cookie: buildCheckFunction(['cookies']),
  header: buildCheckFunction(['headers']),
  param: buildCheckFunction(['params']),
  query: buildCheckFunction(['query']),
  files: buildCheckFunction(['files'])
};