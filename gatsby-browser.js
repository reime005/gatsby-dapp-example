/* globals window */

import React from 'react';
import { Provider } from 'react-redux';
import { initStore } from 'src/state/initStore';

import {
  BaseContainer
} from 'src/containers';

export const wrapRootComponent = ({ Root }) => {
  const store = initStore();
  
    const ConnectedRouterWrapper = () => (
        <Provider store={store}>
            <div>
              <BaseContainer store={store}>
              </BaseContainer>
              <Root />
            </div>
        </Provider>
    );
  
  return ConnectedRouterWrapper;
}
