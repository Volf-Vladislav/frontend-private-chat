import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { rootReduсer, initialState } from '../redux/rootReducer'

import RenderPages from './RenderRages'

const store = createStore(rootReduсer, initialState)

function Navigation() {
    return (
        <Provider store={store}>
            <RenderPages />
        </Provider>
    )
}

export default Navigation