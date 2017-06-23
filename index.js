'use strict';
const API = require('./api');
const api = new API();
api.initialize()
  .then(() => {
    return api.start();
  })
  .then(() => {
    console.log(`Server listening ${api.server.address().address}:${api.server.address().port}...`);
  })
  .catch((err) => {
    console.error(err);
  });
