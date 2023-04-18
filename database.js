require('./env');

const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

let DB;
console.log();

const getDatabase = () => {
  const { DB_URI, DB_NAME, DB_PASSWORD, DB_PORT } = process.env;

  const uri = (
    DB_URI.match(/DB_/g).length
      ? `mongodb://${DB_NAME}:${DB_PASSWORD}@127.0.0.1:${DB_PORT}/admin` // Local
      : DB_URI // Docker
  );

  connection = uri;

  if (!DB) {
    DB = mongoose.connect(connection);
  }

  return DB;
};

module.exports = getDatabase;
