const {
  buildCheckFunction,
  check,
  body,
  cookie,
  header,
  param,
  query,
  files
} = require('./validation-chain-builders');

module.exports = {
  buildCheckFunction,
  check,
  body,
  cookie,
  header,
  param,
  query,
  files,
  checkSchema: require('./schema'),
  oneOf: require('./one-of'),
  validationResult: require('./validation-result')
};