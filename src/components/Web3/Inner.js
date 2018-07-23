import React from 'react';

const Inner = (props) => (
  <div>
    <p>{`Contract name: ${props.contractName}`}</p>
    <p>{`Contract numbers: ${props.numbers}`}</p>
  </div>
)

export default Inner;