import React from 'react';
import { SimpleForm } from '~/components';

export class Web3Wrapper extends React.Component {
  state = {
    nameKey: undefined,
    contractName: "-",
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {
      init,
      initialized,
      store,
      getName,
      getNumbers
    } = this.props;
    
    init && init(store);
    // initialized && getName && getName();
    // initialized && getNumbers && getNumbers();
  }

  async componentWillReceiveProps(props) {
    if (props.initialized !== this.props.initialized) {
      props.getName();
      props.getNumbers();
    }
  }

  render() {
    const {
      initialized,
      accounts,
      numbers,
      changeName,
      name
    } = this.props;

    return(
      <div>
        <p>{accounts[0] && `Account: ${accounts[0]}`}</p>
        <br/>
        {
          initialized ? 
          <div>
            <SimpleForm contractName={name} numbers={numbers} changeName={changeName}/>
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
