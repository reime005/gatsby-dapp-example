import React from 'react'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'

import { initStore } from './src/state/initStore';

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
    const store = initStore()

    const ConnectedBody = () => (
        <Provider store={store}>
            {bodyComponent}
        </Provider>
    )
    replaceBodyHTMLString(renderToString(<ConnectedBody/>))
}