import React from 'react';
import { SimpleForm } from '~/components';

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
        <p>{account && `Account: ${account}`}</p>
        <p>{balance && `Balance: ${balance / 1e18} ETH`}</p>
        <br/>
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
              loading...
            </p>
          </div>
        }
      </div>
    )
  }
}
