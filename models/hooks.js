const handleValidateError = (error, data, next) => {
  error.status = 400;
  next();
};

const runValidatorsUpdate = function (next) {
  this.options.runValidators = true;
  next();
};

module.exports = {
  handleValidateError,
  runValidatorsUpdate,
};
