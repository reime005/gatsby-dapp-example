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
    
    init(store);
  }

  async componentWillReceiveProps(props) {
    console.log("props");
    
    if (props.initialized) {
      props.getName();
    }
  }

  send() {
    this.props.changeName("test23");
  }

  render() {
    const {
      initialized,
      accounts,
      name
    } = this.props;


    return(
      <div>
        <p>{accounts[0] && `Account: ${accounts[0]}`}</p>
        <button onMouseDown={this.send.bind(this)}>CHANGE NAME</button>
        <br/>
        {
          initialized ? 
          <div>
            <Inner contractName={name}/>
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