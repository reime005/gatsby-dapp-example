import React from 'react';
import { SimpleForm } from '~/components';
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
    if (props.initialized === true &&
      props.initialized !== this.props.initialized) {
      this.startSubscribeCalls([props.getName, props.getNumbers]);

      //
      props.drizzle.contracts[contracts.NameStorageExample.contractName]
      .events
      [contracts.NameStorageExample.events.NameChangedEvent]
      ({}, (error, event) => {
        console.log(error, event);
      })
      .on('data', (event) => {
        console.log(event);
      })
      .on('changed', (event) => {
        console.log(event);
      })
      .on('error', (error) => {
        console.log(error);
      });
    }
  }

  render() {
    const {
      initialized,
      accounts,
      accountBalances,
      numbers,
      changeName,
      name
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
