# gatsby-dapp-example
A simple example of using the Ethereum blockchain with Gatsby.Js. Smart contract is written in Solidity and developed using Truffle Framework.

For an overview of the project structure please refer to the [Gatsby documentation - Building with Components](https://www.gatsbyjs.org/docs/building-with-components/).

## Install

Make sure that you have the Gatsby CLI program installed:
```sh
npm install --global gatsby-cli
```

And run from your CLI:
```sh
gatsby new gatsby-example-site
```

Then you can run it by:
```sh
cd gatsby-example-site
gatsby develop
```

## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-dapp-example)

## Known Issues

* Due to 3rd party libraries being used, the HTML build process in `gatsby build` does not work 
* Due to the MetaMask provider you cannot listen to Events right now. An alternative would be to use the Web Socket Provider, but then you won't be able to use MetaMask properly or have other issues. See [this issue](https://github.com/MetaMask/metamask-extension/issues/3642)