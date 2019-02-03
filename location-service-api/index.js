const express = require('express');
const app = express();
const diskdb = require('diskdb')
const createExpressApp = require('./create-express-app');

require('dotenv').config();

const db = diskdb.connect('./data', ['stores', 'customers', 'customerLocations']);

createExpressApp(db)
  .listen(process.env.port || 3000, () => {
    console.log('listening on port 3000...');
  });
