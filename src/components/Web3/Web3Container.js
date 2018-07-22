import React from 'react';
import { connect } from 'react-redux';
import { drizzleConnect } from 'drizzle-react';
import { Drizzle, generateStore } from 'drizzle'
import Inner from './Inner';
import { drizzleOptions } from '../../state/drizzleOptions';

class Web3Container extends React.Component {
  constructor(props, context) {
    super(props);

    this.state = {
      contractName: "-",
      drizzle: new Drizzle(drizzleOptions, props.store)
    }

    console.log(context);
    
    // const 
    // this.drizzle = drizzle;
    // console.log(drizzle);
    // console.log(props);
    
  }

  async componentWillReceiveProps(props) {
    // console.log(props);
    
    const {
      drizzle
    } = this.state;
    
    var state = drizzle.store.getState();
    console.log(state);
    

    if (state.drizzleStatus.initialized) {
      let key = await drizzle.contracts
      .NameStorageExample
      .methods
      .getName
      .cacheCall();

      let contractName = "";
      if (state.contracts
        .NameStorageExample
        .getName
        [key]) {
          contractName = state.contracts
          .NameStorageExample
          .getName
          [key]
          .value;
        }
      // // 
      // console.log(contractName);
      // console.log(state.transactionStack);
      

      this.setState({contractName: contractName})
    }
  }

  async send() {
    let foo = await this.state.drizzle.contracts
    .NameStorageExample
    .methods
    .changeName
    .cacheSend("testName2", {from: "0xE69cc925Ffb8a07Ba7f5ABB6D5117B1fc8B95ca2"})
    this.setState({tx: foo})
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