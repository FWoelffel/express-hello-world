const express = require('express');
const HTTP_PORT = process.env.HTTP_PORT || 3000;
const DEFAULT_MSG = 'Hello world!';
class API {
  constructor (args = {}) {
    this._app = express();
    this._server = null;
    this._hello = args.hello || DEFAULT_MSG;
  }
  initialize () {
    this._app.get('/', (req, res) => {
      res.status(200).send(this._hello);
    });
    return Promise.resolve(this);
  }
  start () {
    return new Promise((resolve, reject) => {
      this._server = this._app.listen(HTTP_PORT, (err) => {
        if (err) {
          reject(err);
        }
        else {
          resolve(this);
        }
      });
    });
  }
  stop () {
    return new Promise((resolve, reject) => {
      this._server.close((err) => {
        if (err) {
          reject(err);
        }
        else {
          resolve(this);
        }
      });
    });
  }
  get server () {
    return this._server;
  }
}
module.exports = API;
