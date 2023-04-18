FROM mongo:5.0.2

COPY init.json /init.json
CMD mongoimport \
  --collection homies \
  --drop \
  --type json \
  --file /init.json \
  --jsonArray $DB_URI