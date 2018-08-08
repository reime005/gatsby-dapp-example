/* globals window */

import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { DrizzleProvider } from 'drizzle-react';
import { initStore } from '~/state';
import { drizzleOptions } from '~/constants';

import {
  BaseContainer
} from '~/containers';

export const wrapRootComponent = ({ history }) => {
  const store = initStore();
  
  const ConnectedRouterWrapper = ({ children }) => (
    <DrizzleProvider options={drizzleOptions}>
      <Provider store={store}>
        <Router history={history}>
          <div>
            <BaseContainer>
            </BaseContainer>
              {children}
          </div>
        </Router>
      </Provider>
    </DrizzleProvider>
  );

  return ConnectedRouterWrapper;
};
