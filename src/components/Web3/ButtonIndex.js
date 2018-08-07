import React from 'react';

export class ButtonIndex extends React.Component {
  render() {
    const {
      incrementIndex,
      decrementIndex,
      index
    } = this.props;
    
    return(
      <div>
        <p>Lookup Index: {index}</p>
        <button onClick={incrementIndex}>increment</button>
        <button onClick={decrementIndex}>decrement</button>
      </div>
    )
  }
}