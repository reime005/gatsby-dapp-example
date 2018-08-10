/* globals window */

import React from 'react';
import { Provider } from 'react-redux';
import { initStore } from 'src/state';
import { drizzleOptions } from 'src/constants';

import {
  BaseContainer
} from 'src/containers';

export const wrapRootComponent = ({ Root }) => {
  const store = initStore();
  
  if (typeof window === 'undefined') {
    const ConnectedRouterWrapper = () => (
        <Provider store={store}>
            <div>
                <Root />
            </div>
        </Provider>
    );
  
    return ConnectedRouterWrapper;
  } else {
    const DrizzleProvider = require('drizzle-react').DrizzleProvider;
    
    const ConnectedRouterWrapper = () => (
      <DrizzleProvider options={drizzleOptions}>
        <Provider store={store}>
            <div>
              <BaseContainer>
              </BaseContainer>
                <Root />
            </div>
        </Provider>
      </DrizzleProvider>
    );
  
    return ConnectedRouterWrapper;
  }
};
