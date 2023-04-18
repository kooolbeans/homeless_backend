const cors = require('cors');
const express = require('express');
const getDatabase = require('./database');

const port = process.env.PORT;

getDatabase()
  .then((database) => {
    database.connection.on('error', (error) => {
      console.log(error);
    });

    database.connection.once('connected', () => {
      console.log('Database Connected');
    });
  });

const app = express();
app.use(cors());
app.use(express.json());

const routes = require('./routes/index');

app.use('/v1/api', routes);

const server = app.listen(port, '0.0.0.0', () => {
  console.log(`Homeless API Started at ${port}`);
});

module.exports = server