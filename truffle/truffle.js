require('babel-register');
require('babel-polyfill');
var HDWalletProvider = require("truffle-hdwallet-provider");
var infura_apikey = "....";
var mnemonic = "....";


module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      network_id: 4,
      provider: new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/" + infura_apikey, 0),
    }
  }
};
