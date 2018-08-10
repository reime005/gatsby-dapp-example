import React from 'react'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'

import { initStore } from './src/state/initStore';

import {
  BaseContainer
} from '~/containers';

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  const store = initStore();
  
    const ConnectedRouterWrapper = () => (
        <Provider store={store}>
            <div>
              <BaseContainer>
              </BaseContainer>
              {bodyComponent}
            </div>
        </Provider>
    );
  
    replaceBodyHTMLString(renderToString(<ConnectedRouterWrapper/>))
};


// export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
//     const store = initStore()

//     const ConnectedBody = () => (
//         <Provider store={store}>
//             {bodyComponent}
//         </Provider>
//     )
//     replaceBodyHTMLString(renderToString(<ConnectedBody/>))
// }