const fs = require('fs');
const axios = require('axios');
const { data, elasticsearch, index_name } = require('../keys');

module.exports = async (req, res) => {
  console.log(
    `Seeding Elasticsearch instance... \n Instance Address: ${elasticsearch} `
  );

  console.log(`Reading file: ${data}`);
  let rwdata = fs.readFileSync(data);
  let objects = JSON.parse(rwdata);

  for (var i = 0; i < objects.length; i++) {
    const res = await axios.post(
      `${elasticsearch}/${index_name}/_doc`,
      objects[i]
    );
    console.log(res.data);
  }

  console.log('Finished');
  res.status(201).json({
    message: 'done',
  });
};
