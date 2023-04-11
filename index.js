require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const port = process.env.PORT;

mongoose.set('strictQuery', true);
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
});

database.once('connected', () => {
  console.log('Database Connected');
});
const app = express();
app.use(cors());
app.use(express.json());

const routes = require('./routes/index');

app.use('/v1/api', routes);

const server = app.listen(port, () => {
  console.log(`Homeless API Started at ${port}`);
});
module.exports = server;
