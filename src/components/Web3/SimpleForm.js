import React from 'react';

const handleSubmit = (event, changeName) => {
  const data = new FormData(event.target);
  changeName(data.get('name'));
}

export const SimpleForm = (props) => (
  <div>
    <p>{`Contract name: ${props.contractName}`}</p>
    <p>{`Contract numbers: ${props.numbers}`}</p>

    <form onSubmit={(event) => handleSubmit(event, props.changeName)}>
        <label htmlFor="name">Enter name</label>
        <br/>
        <input id="name" name="name" type="text" />
      <button>CHANGE NAME</button>
    </form>
  </div>
)
