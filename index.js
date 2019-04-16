/**
 * @format
 */
import React from 'react' 
import { AppRegistry } from 'react-native'
import App from './src/components/App'
import { name as appName } from './app.json'
import ReducerFactory from './src/redux/reducer/ReducerFactory'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(ReducerFactory, applyMiddleware(thunk))

const ReduxApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => ReduxApp)
