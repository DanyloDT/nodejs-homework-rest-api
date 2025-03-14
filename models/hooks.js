const handleValidateError = (error, data, next) => {
  const { name, code } = error;

  error.status = name === "MongoServerError" && code === 11000 ? 409 : 400;
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
