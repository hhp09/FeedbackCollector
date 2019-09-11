// figuring out prod or dev env

if(process.env.NODE_ENV === 'production') {
  // return prod keys for prod env
  module.exports = require('./prod');
} else {
  // return dev keys for dev env
  module.exports = require('./dev');
}