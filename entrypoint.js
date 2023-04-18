const db = connect($DB_URI);

db.auth($DB_USER, $DB_PASSWORD);

db = db.getSiblingDB('auth');

db.createUser({
  user: $DB_USER,
  pwd: $DB_PASSWORD,
  roles: [
    {
      role: 'root',
      db: $DB_USER,
    },
  ],
});

db.createUser({
  user: $DB_NAME,
  pwd: $DB_PASSWORD,
  roles: [
    {
      role: 'root',
      db: $DB_NAME,
    },
  ],
});