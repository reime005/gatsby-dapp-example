const fs = require('fs');
const _ = require('lodash');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const path = require('path');

exports.onCreateWebpackConfig = ( { stage, actions } ) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), "node_modules"],
      alias: {
        '~': path.resolve(__dirname, 'src'),
        'scrypt.js': path.resolve(__dirname, 'node_modules/scrypt.js/js.js'),
        'swarm-js': path.resolve(__dirname, 'node_modules/swarm-js/lib/api-browser.js'),
      }
    }
  })
};
