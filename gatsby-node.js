/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const path = require('path');

exports.modifyWebpackConfig = ({ config, stage }) => {
  config.merge({
    externals: {
      document: true,
      discus_config: true,
    },
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src'),
      },
    },
    // plugins: [
    //   plugins.define({
    //     __DEVELOPMENT__: stage === 'develop' || stage === 'develop-html',
    //   }),
    // ],
  });

  return config;
};