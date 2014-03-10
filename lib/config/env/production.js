'use strict';

module.exports = {
  env: 'production',
  mongo: {
    uri: process.env.MONGOLAB_URI ||
         process.env.MONGOHQ_URL ||
         'mongodb://sgentile:Ephesians4:32@ds033639.mongolab.com:33639/brackets'
  }
};