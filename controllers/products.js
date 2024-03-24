require('express-async-errors');
const getAllProductsStatic = async (req, res) => {
  throw new Error('Testing express async error handlers');
  res.status(200).json({ msg: `Products testing route` });
};
const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: `Products route` });
};

module.exports = { getAllProducts, getAllProductsStatic };
