import express from 'express';
//const dotenv = require('dotenv').config();
import 'dotenv/config';
import v1Router from './v1/routes/index.js';

const port = process.env.API_PORT || 5000;

const app = express();
app.use('/', v1Router);

app.listen(port, () =>
  console.log(`Backend Server is running on port ${port}`),
);
