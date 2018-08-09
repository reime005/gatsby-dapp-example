/* globals window */

import React from 'react';
import { Provider } from 'react-redux';
import { DrizzleProvider } from 'drizzle-react';
import { initStore } from '~/state';
import { drizzleOptions } from '~/constants';

import {
  BaseContainer
} from '~/containers';

export const replaceComponentRenderer = ({ history }) => {
  const store = initStore();
  
  const ConnectedRouterWrapper = ({ children }) => (
    <DrizzleProvider options={drizzleOptions}>
      <Provider store={store}>
          <div>
            <BaseContainer>
            </BaseContainer>
              {children}
          </div>
      </Provider>
    </DrizzleProvider>
  );

  return ConnectedRouterWrapper;
};
