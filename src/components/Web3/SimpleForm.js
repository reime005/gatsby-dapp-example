import React from 'react';

export class SimpleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.props.changeName(this.state.name);
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  render() {
    const {
      contractName,
      numbers,
    } = this.props;

    return(
      <div>
        <p>{`Contract name: ${contractName}`}</p>
        <p>{`Contract numbers: ${numbers}`}</p>

        <form onSubmit={this.handleSubmit}>
          <label>
            Name: <br/>
            <input type="text" value={this.state.name} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
