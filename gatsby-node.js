const fs = require('fs');
const _ = require('lodash');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const path = require('path');

// const packageJson = require( './package.json' );
// const rawBabelRc = JSON.parse( fs.readFileSync( './.babelrc' ) );

// exports.modifyBabelrc = ( { babelrc } ) => {
//     // remove duplicates
//     babelrc.plugins = _.uniq( babelrc.plugins );
//     babelrc.presets = babelrc.presets.slice( 0, rawBabelRc.presets.length );

//     const envIndex = babelrc.presets.findIndex( preset => {
//         return _.isArray( preset ) && preset[ 0 ].indexOf( 'babel-preset-env' ) > -1;
//     } );

//     const rcEnvOptions = babelrc.presets[ envIndex ][ 1 ];

//     rcEnvOptions.targets = {
//         browsers: packageJson.browserslist
//     };

//     return babelrc;
// };

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
  
  // const query = Object.assign( {}, config._loaders.js.config.query, {
  //       babelrc: false
  //   } );

  //   config.merge({
  //     resolve: {
        
  //     }
  //   });

    // config
    //     .removeLoader( 'js' )
    //     .loader( 'js', {
    //         test: /\.jsx?$/,
    //         exclude: /node_modules/,
    //         loader: 'babel',
    //         query
    //     } );

};