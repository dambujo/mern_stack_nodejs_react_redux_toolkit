import express from 'express';
//const dotenv = require('dotenv').config();
import 'dotenv/config';
import v1Router from './v1/routes/index.js';
//import errorHandler from './middleware/errorMiddleware.js';

const port = process.env.API_PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', v1Router);
//app.use(errorHandler);

app.listen(port, () =>
  console.log(`Backend Server is running on port ${port}`),
);
