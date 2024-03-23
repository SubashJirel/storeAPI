require('dotenv').config();

//async errors

const express = require('express');
const app = express();

const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

//middleware
app.use(express.json()); // this middleware will parse that JSON data and make it available in req.body of your route handlers.

//routes
app.get('/', (req, res) => {
  res.end('<h1>Store api</h1> <a href="/api/v1/products">Products route</a>');
});

//products route

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const PORT = process.env.port || 5000;

const start = async () => {
  try {
    app.listen(PORT, console.log(`app is listening on the port ${PORT}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
