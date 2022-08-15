const extract = require('extract-inline-css');

extract('./views/index.hbs', {
  dist: './dist'
});