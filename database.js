require('./env');

const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

let DB;

const getDatabase = () => {
  const { DB_URI, DB_USER, DB_PASSWORD, DB_PORT, DB_DATABASE } = process.env;
  connection = DB_URI || `mongodb://${DB_USER}:${DB_PASSWORD}@127.0.0.1:${DB_PORT}/${DB_DATABASE}`;

  if (!DB) {
    DB = mongoose.connect(connection);
  }

  return DB;
};

module.exports = getDatabase;
