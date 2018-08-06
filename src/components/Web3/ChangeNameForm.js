import React from 'react';

export class ChangeNameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.props.txMethod(this.state.name);
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  render() {
    const {
      text,
      name
    } = this.props;

    return(
      <div>
        <p>{text + name}</p>

        <form onSubmit={this.handleSubmit}>
          <label>
            {text}<br/>
            <input type="text" value={this.state.name} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
