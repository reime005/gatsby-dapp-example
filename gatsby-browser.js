/* globals window */

import React from 'react';
import { Provider } from 'react-redux';
import { initStore } from '~/state';
import { drizzleOptions } from '~/constants';

import {
  BaseContainer
} from '~/containers';

export const wrapRootComponent = ({ Root }) => {
  const store = initStore();
  console.log("BaseContainer");
  console.log(BaseContainer);
  
  if (typeof window === 'undefined') {
    const ConnectedRouterWrapper = () => (
        <Provider store={store}>
            <div>
              {/* <BaseContainer>
              </BaseContainer> */}
                <Root />
            </div>
        </Provider>
    );
  
    return ConnectedRouterWrapper;
  } else {
    const DrizzleProvider = require('drizzle-react').DrizzleProvider;
    console.log("DrizzleProvider");
    console.log(DrizzleProvider);
    
    const ConnectedRouterWrapper = () => (
      // <DrizzleProvider options={drizzleOptions}>
        <Provider store={store}>
            <div>
              {/* <BaseContainer>
              </BaseContainer> */}
                <Root />
            </div>
        </Provider>
      // </DrizzleProvider>
    );
  
    return ConnectedRouterWrapper;
  }
};
