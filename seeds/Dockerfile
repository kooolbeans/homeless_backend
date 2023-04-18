FROM mongo:5.0.2

COPY init.json /init.json
CMD mongoimport \
  --host mongodb \
  --db reach-engine \
  --collection homies \
  --type json \
  --file /init.json \
  --jsonArray \
  --username $DB_USERNAME \
  --password $DB_PASSWORD \
  $DB_URI
