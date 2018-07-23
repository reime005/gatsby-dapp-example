import React from 'react';
import { drizzleConnect } from 'drizzle-react';
import { connect } from 'react-redux';
import { Drizzle } from 'drizzle'
import Inner from './Inner';
import { drizzleOptions } from '../../state/drizzleOptions';

class Web3Wrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nameKey: undefined,
      contractName: "-",
    }
  }

  componentDidMount() {
    const {
      init,
      store
    } = this.props;

    console.log(this.props);
    
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

  async send() {
    // let foo = await this.state.drizzle.contracts
    // .NameStorageExample
    // .methods
    // .changeName
    // .cacheSend("testName312", {from: this.state.accounts[0]})
  }

  render() {
    const {
      initialized,
      accounts
    } = this.props;

    const {
      contractName
    } = this.state;

    return(
      <div>
        {contractName}
        <button onClick={this.send.bind(this)}>CHANGE NAME</button>
        {/* {this.state.tx} */}
        <br/>
        <br/>
        <br/>
        {
          initialized ? 
          <div>
            <Inner accounts={accounts}/>
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

export default Web3Wrapper;//connect(mapStateToProps, mapDispatchToProps)(Web3Container);
// export default drizzleConnect(Web3Container, mapStateToProps, mapDispatchToProps);