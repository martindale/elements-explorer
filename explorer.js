var config = require('./config');

var App = require('maki');
var app = new App (config);

// TODO: use app.configure()
var Asset = app.define('Asset', {
  icon: 'database',
  components: {
    query: 'oculo-asset-index'
  },
  attributes: {
    hash: { type: String, id: true },
    name: { type: String }
  }
});

var Block = app.define('Block', {
  icon: 'cube',
  attributes: {
    hash: { type: String, id: true }
  }
});

var Transaction = app.define('Transaction', {
  icon: 'list',
  attributes: {
    hash: { type: String, id: true },
    inputs: [ { type: String, ref: 'Transaction' } ]
  }
});

app.start();