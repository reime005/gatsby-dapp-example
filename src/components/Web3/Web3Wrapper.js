import React from 'react';
import { SimpleForm, FooForm } from '~/components';
import { contracts } from '~/constants';

export class Web3Wrapper extends React.Component {
  state = {
    nameKey: undefined,
    contractName: "-",
  }

  startSubscribeCalls(functions) {
    if (!Array.isArray(functions)) {
      return;
    }

    functions.forEach(fun => {
      typeof fun === 'function' && fun();
    })
  }

  componentWillReceiveProps(props) {
    // if drizzle has been initialized
    const state = props.drizzle.store.getState();
    console.log(state);
    
    if (props.initialized === true &&
      props.initialized !== this.props.initialized) {
      this.startSubscribeCalls([props.getName, props.getNumbers, props.getFoo]);

      let Web3 = require('web3')
      let web3 = new Web3(new Web3.providers.WebsocketProvider('ws://localhost:8545'))

      const MyContract = require('../../../truffle/build/contracts/NameStorageExample.json');

      const myContract = new web3.eth.Contract(
        MyContract.abi,
        "0x50131becc97eeea1acdd154206872957e9317b92",
        // MyContract.networks[MY_NETWORK_ID].address,
      )

      myContract.events.allEvents({
      }, function (error, event) {
        if (error) console.log(error)
        console.log(event)
      })

      // props.drizzle.contracts[contracts.NameStorageExample.contractName]
      // .events
      // [contracts.NameStorageExample.events.NameChangedEvent]
      // ({}, (error, event) => {
      //   console.log(error, event);
      // })
      // .on('data', (event) => {
      //   console.log(event);
      // })
      // .on('changed', (event) => {
      //   console.log(event);
      // })
      // .on('error', (error) => {
      //   console.log(error);
      // });
    }
  }

  render() {
    const {
      initialized,
      accounts,
      accountBalances,
      numbers,
      changeName,
      name,
      changeFoo,
      foo
    } = this.props;

    const account = accounts[0];
    const balance = accountBalances[account];

    return(
      <div style={{ backgroundColor: '#3164a8', padding: 50, color: 'white'}}>
      {
        account && balance ?
        <div>
          <p>{account && `Account: ${account}`}</p>
          <p>{balance && `Balance: ${balance / 1e18} ETH`}</p>
          <br/>
        </div>
        :
        <p>
          no account information. please unlock your wallet and refresh this page
        </p>
      }
      {
        initialized ? 
        <div>
          <SimpleForm 
            contractName={name} 
            numbers={numbers} 
            changeName={changeName}
          />
          <FooForm 
            foo={foo} 
            changeFoo={changeFoo}
          />
        </div>
        :
        <div>
          <p>
            no contract information
          </p>
        </div>
      }
      </div>
    )
  }
}
