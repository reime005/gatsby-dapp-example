import React from 'react';
import { connect } from 'react-redux';
import {
  initSagaAction,
} from '~/sagas';

/**
 * Component to handle the initialization of Drizzle
 **/
class BaseComponent extends React.PureComponent {
  componentDidMount() {
    this.props.init(this.props.store);
  }

  render() {
    return(
      null
    )
  }
}

export const BaseContainer = connect((state) => ({
  store: state.store,
}),
(dispatch) => ({
  init: (store) => dispatch(initSagaAction(store)),
}))(BaseComponent);

// if (typeof window !== 'undefined') {
//   // const drizzleConnect = require('drizzle-react').drizzleConnect;
  
//   // _BaseContainer = drizzleConnect(
//   //   _BaseContainer,
//   //   (state) => ({
//   //   }),
//   // )
// }

// export const BaseContainer = _BaseContainer;
