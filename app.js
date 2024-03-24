const express = require('express');
require('dotenv').config();

require('express-async-errors'); //
/*
This above express-async-errors should be placed at the very beginning, before any other code that might define routes or use asynchronous handlers. This ensures that the express-async-errors module is loaded and applied before any routes are defined, allowing it to intercept errors thrown from asynchronous handlers.
 */

const connectDB = require('./db/connect');
const app = express();

const productsRouter = require('./routes/products');

const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

//middleware
app.use(express.json()); // this middleware will parse that JSON data and make it available in req.body of your route handlers.

//routes
app.get('/', (req, res) => {
  res.end('<h1>Store api</h1> <a href="/api/v1/products">Products route</a>');
});
app.use('/api/v1/products', productsRouter);

//products route

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const PORT = process.env.port || 5000;

const start = async () => {
  try {
    //connectDB
    connectDB(process.env.MONGO_URI);
    app.listen(PORT, console.log(`app is listening on the port ${PORT}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
