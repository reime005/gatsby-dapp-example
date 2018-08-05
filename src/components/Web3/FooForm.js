import React from 'react';

export class FooForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      foo: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.props.changeFoo(this.state.foo);
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({foo: event.target.value});
  }

  render() {
    const {
      foo,
    } = this.props;

    return(
      <div>
        <p>{`Contract foo: ${foo}`}</p>

        <form onSubmit={this.handleSubmit}>
          <label>
            Foo: <br/>
            <input type="text" value={this.state.foo} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
