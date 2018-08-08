import React from 'react';
import { connect } from 'react-redux';
import { drizzleConnect } from 'drizzle-react';
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
}))(drizzleConnect(
  BaseComponent,
  (state) => ({
  }),
));

