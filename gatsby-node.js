const fs = require('fs');
const _ = require('lodash');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const path = require('path');

const packageJson = require( './package.json' );
const rawBabelRc = JSON.parse( fs.readFileSync( './.babelrc' ) );

exports.modifyBabelrc = ( { babelrc } ) => {
    // remove duplicates
    babelrc.plugins = _.uniq( babelrc.plugins );
    babelrc.presets = babelrc.presets.slice( 0, rawBabelRc.presets.length );

    const envIndex = babelrc.presets.findIndex( preset => {
        return _.isArray( preset ) && preset[ 0 ].indexOf( 'babel-preset-env' ) > -1;
    } );

    const rcEnvOptions = babelrc.presets[ envIndex ][ 1 ];

    rcEnvOptions.targets = {
        browsers: packageJson.browserslist
    };

    return babelrc;
};

exports.modifyWebpackConfig = ( { config } ) => {

    const query = Object.assign( {}, config._loaders.js.config.query, {
        babelrc: false
    } );

    // config.resolve.alias = {
    //   '~': path.resolve(__dirname, 'src'),
    // }

    config.merge({
      resolve: {
        root: path.resolve(__dirname, './src'),
        extensions: ['', '.js', '.jsx', '.json'],
        alias: {
          '~': path.resolve(__dirname, 'src'),
        }
      }
    });

    config
        .removeLoader( 'js' )
        .loader( 'js', {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query
        } );

    return config;
};