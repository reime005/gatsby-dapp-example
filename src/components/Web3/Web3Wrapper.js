import React from 'react';
import Inner from './Inner';

class Web3Wrapper extends React.Component {
  state = {
    nameKey: undefined,
    contractName: "-",
  }

  componentDidMount() {
    const {
      init,
      store
    } = this.props;
    
    console.log(store);
    
    init(store);
  }

  retrieveFromState(state, methodName, key) {
    // if (state.contracts
    //   .NameStorageExample
    //   [methodName]
    //   [key]) {
    //     return state.contracts
    //     .NameStorageExample
    //     [methodName]
    //     [key]
    //     .value
    //   }
    return "+";
  }

  // async addSubscription(key) {
  //   await this.state.drizzle.store.subscribe(() => {
  //     const state = this.state.drizzle.store.getState();

  //     let contractName = this.retrieveFromState(state, "getName", key);
  //     console.log(contractName);
      
  //     this.setState({contractName: contractName, accounts: state.accounts})
  //   });
  // }

  async componentWillReceiveProps(props) {
    console.log("props");
    console.log(props);
    
    // const {
    //   drizzle,
    //   nameKey
    // } = this.state;
    
    // var state = drizzle.store.getState();
    

    // if (!nameKey && state.drizzleStatus.initialized) {
    //   let nameKey = await drizzle.contracts
    //   .NameStorageExample
    //   .methods
    //   .getName
    //   .cacheCall();

    //   this.setState({nameKey, accounts: state.accounts});

    //   this.addSubscription(nameKey);
    // }
  }

  send() {
    this.props.changeName("test");
    // let foo = await this.state.drizzle.contracts
    // .NameStorageExample
    // .methods
    // .changeName
    // .cacheSend("testName312", {from: this.state.accounts[0]})
  }

  render() {
    const {
      initialized,
      accounts,
      contractName,
    } = this.props;

    return(
      <div>
        <p>{accounts[0] && `Account: ${accounts[0]}`}</p>
        <button onMouseDown={this.send.bind(this)}>CHANGE NAME</button>
        <br/>
        {
          initialized ? 
          <div>
            <Inner contractName={contractName}/>
          </div>
          :
          <div>
            loading...
          </div>
        }
      </div>
      
    )
  }
}

export default Web3Wrapper;