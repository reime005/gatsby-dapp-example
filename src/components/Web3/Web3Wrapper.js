import React from 'react';
import { 
  ChangeNameForm,
  ButtonIndex
} from 'src/components';

/**
 * Basic Component representing Web3 Sub Components
 * Links the subscribed props to the sub components
 **/
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
          this.props.getIndexName(this.props.index)
        ]);
    }
  }

  componentWillReceiveProps(props) {
    console.log("props");
    console.log(props);
    
    // if drizzle has been initialized
    if (props.initialized === true &&
      props.initialized !== this.props.initialized) {
      this.startSubscribeCalls(
        [
          props.getContractName, 
          props.getAddressName,
          props.getIndexName(props.index),
        ]);
    }

    if (props.index !== this.props.index) {
      this.props.getIndexName(props.index)
    }
  }

  render() {
    const {
      initialized,
      accounts,
      accountBalances,
      index,

      indexName,
      contractName,
      addressName,

      incrementIndex,
      decrementIndex,

      changeAddressName,
      addIndexName,
      changeContractName,
    } = this.props;

    const account = accounts && accounts[0] || "";
    const balance = accountBalances && accountBalances[account] || "";

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
            text="Address name: "
            name={addressName} 
            txMethod={changeAddressName}
          />
          <ChangeNameForm 
            text="Index name: "
            name={indexName} 
            txMethod={addIndexName}
          />
          <ButtonIndex 
            index={index}
            incrementIndex={incrementIndex}
            decrementIndex={decrementIndex}
          />
        </div>
        :
        <div>
          <p>
            no contract information. use the rinkeby testnet
          </p>
        </div>
      }
      </div>
    )
  }
}
