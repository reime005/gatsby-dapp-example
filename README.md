# Gatsby DApp example - Name Storage Example
A simple example of storing names in different ways using the Ethereum blockchain. 

Tech stack:
* Gatsby.JS using the [gatsby-advanced-blog](https://github.com/wonism/gatsby-advanced-blog) starter/boilerplate, which already includes redux-saga and more
* Netlify as a continuous deployment 
* Truffle Framework for deploying and testing Solidity smart contracts
* Drizzle as a reactive datastore for DApp's

A current deployed version can be found here: [https://gatsby-dapp-example.netlify.com/](https://gatsby-dapp-example.netlify.com/). Note: I've been using the Rinkeby test net.

For an overview of the project structure please refer to the [Gatsby documentation - Building with Components](https://www.gatsbyjs.org/docs/building-with-components/).

## Try it

[![Check it out on Netlify](https://www.netlify.com/img/deploy/button.svg)](https://gatsby-dapp-example.netlify.com/)

## Install

```sh
npm install 
```

For local development:
```sh
npm run development
```

For static production builds:
```sh
npm run build
```

The output can be found in the public folder.

## Known Issues

* The initialization of Drizzle lead to issues with the gatsby build process. I had to copy parts of the library into my repository, which is definitely not recommended!
* Due to the MetaMask provider you cannot listen to Events right now. An alternative would be to use the Web Socket Provider, but then you won't be able to use MetaMask properly or have other issues. See [this issue](https://github.com/MetaMask/metamask-extension/issues/3642)
