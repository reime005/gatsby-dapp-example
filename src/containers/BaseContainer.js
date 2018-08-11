import React from 'react';
import { connect } from 'react-redux';
import {
  initSagaAction,
} from 'src/sagas';

/**
 * Component to handle the initialization of Drizzle
 **/
class BaseWrapper extends React.Component {
  constructor(props) {
    super(props);
    props.init(props.store)
  }

  render() {
    return(
      null
    )
  }
}

let _BaseContainer = BaseWrapper;

_BaseContainer = connect((state) => ({
  
}),
(dispatch) => ({
  init: (store) => dispatch(initSagaAction(store)),
}))(_BaseContainer);

export const BaseContainer = _BaseContainer;
