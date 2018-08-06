import React from 'react';
import { ChangeNameForm } from '~/components';

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

  componentDidMount() {
    if (this.props.initialized === true) {
      this.startSubscribeCalls(
        [
          this.props.getContractName, 
          this.props.getAddressName,
          this.props.getIndexName(1),
        ]);
    }
  }

  componentWillReceiveProps(props) {
    // if drizzle has been initialized
    if (props.initialized === true &&
      props.initialized !== this.props.initialized) {
      this.startSubscribeCalls(
        [
          props.getContractName, 
          props.getAddressName,
          props.getIndexName(1),
        ]);
    }
  }

  render() {
    const {
      initialized,
      accounts,
      accountBalances,

      indexName,
      contractName,
      addressName,

      changeAddressName,
      addIndexName,
      changeContractName,
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
          <ChangeNameForm 
            text="Contract name: "
            name={contractName} 
            txMethod={changeContractName}
          />
          <ChangeNameForm 
            text="Index name: "
            name={indexName} 
            txMethod={addIndexName}
          />
          <ChangeNameForm 
            text="Address name: "
            name={addressName} 
            txMethod={changeAddressName}
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
