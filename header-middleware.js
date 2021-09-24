module.exports = (req, res, next) => {
  res.header("X-REST-API", "countries-api-v1");
  next();
};
