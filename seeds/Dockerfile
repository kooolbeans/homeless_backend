FROM mongo:5.0.2

COPY init.json /init.json
CMD mongoimport \
  --collection homies \
  --type json \
  --file /init.json \
  --jsonArray $DATA_URI