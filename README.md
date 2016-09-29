## Truffle + Webpack Demo App

![BoardRoom Example (built on Metacoin example )](https://github.com/ConsenSys/truffle-webpack-demo/blob/master/docs/images/boardroom.jpg?raw=true)

This is a simple BoardRoom Dapp boilerplate utilising Truffle and Webpack.

### Coding Style

This repo uses JS Standard.

### Running

0. Clone this repo
0. `npm install`
0. Make sure `testrpc` is running on its default port. Then:
  - `WEB3_RPC_LOCATION=http://localhost:8545 npm run start` - Starts the development server
  - `WEB3_RPC_LOCATION=http://localhost:8545 npm run build` - Generates a build
  - `truffle test` - Run the rest suite
