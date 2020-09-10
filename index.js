const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const keys = require('./keys');
const services = require('./services');

console.log(services.seeder);
// Services
app.post('/seed_index', services.seeder);

app.listen(keys.PORT, () => {
  console.log(`Elasticsearch Client is running on PORT: ${keys.PORT}`);
});
