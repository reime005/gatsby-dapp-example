import React from 'react';
import { connect } from 'react-redux';
import { drizzleConnect } from 'drizzle-react';
import { Drizzle, generateStore } from 'drizzle'
import Inner from './Inner';
import { drizzleOptions } from '../../state/drizzleOptions';

class Web3Container extends React.Component {
  constructor(props) {
    super(props);

    const drizzle = new Drizzle(drizzleOptions, props.store);
    this.state = {
      nameKey: undefined,
      contractName: "-",
      drizzle
    }
  }

  retrieveFromState(state, methodName, key) {
    if (state.contracts
      .NameStorageExample
      [methodName]
      [key]) {
        return state.contracts
        .NameStorageExample
        [methodName]
        [key]
        .value
      }
    return "+";
  }

  async addSubscription(key) {
    await this.state.drizzle.store.subscribe(() => {
      const state = this.state.drizzle.store.getState();

      let contractName = this.retrieveFromState(state, "getName", key);
      console.log(contractName);
      
      this.setState({contractName: contractName, accounts: state.accounts})
    });
  }

  async componentWillReceiveProps(props) {
    // console.log(props);
    
    const {
      drizzle,
      nameKey
    } = this.state;
    
    var state = drizzle.store.getState();
    

    if (!nameKey && state.drizzleStatus.initialized) {
      let nameKey = await drizzle.contracts
      .NameStorageExample
      .methods
      .getName
      .cacheCall();

      this.setState({nameKey, accounts: state.accounts});

      this.addSubscription(nameKey);
    }
  }

  async send() {
    let foo = await this.state.drizzle.contracts
    .NameStorageExample
    .methods
    .changeName
    .cacheSend("testName312", {from: this.state.accounts[0]})
  }

  render() {
    return(
      <div>
        {this.state.contractName}
        <button onClick={this.send.bind(this)}>CHANGE NAME</button>
        {this.state.tx}
        <br/>
        <br/>
        <br/>
        {
          this.props.drizzleStatus.initialized ? 
          <div>
            <Inner/>
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

const mapStateToProps = state => (
  {
    ...state
  }
)

const mapDispatchToProps = dispatch => (
  {
    
  }
)

// export default connect(mapStateToProps, mapDispatchToProps)(Web3Container);
export default drizzleConnect(Web3Container, mapStateToProps, mapDispatchToProps);