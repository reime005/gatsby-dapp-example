import React from 'react';
import { connect } from 'react-redux';
import {
  initSagaAction,
} from 'src/sagas';

/**
 * Component to handle the initialization of Drizzle
 **/
class BaseWrapper extends React.Component {
  componentDidMount() {
    this.props.init(this.props.store);
  }

  render() {
    return(
      null
    )
  }
}

let _BaseContainer = BaseWrapper;

// if (typeof window !== 'undefined') {
//   const drizzleConnect = require('drizzle-react').drizzleConnect;
//   _BaseContainer = drizzleConnect(
//     _BaseContainer,
//     (state) => ({
//     }),
//   )
// }

_BaseContainer = connect((state) => ({
  
}),
(dispatch) => ({
  init: (store) => dispatch(initSagaAction(store)),
}))(_BaseContainer);

export const BaseContainer = _BaseContainer;
