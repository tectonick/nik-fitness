const extract = require('extract-inline-css');

extract('./views/trainer.hbs', {
  dist: './dist'
});