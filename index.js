/**
 * @format
 */
import React from 'react'
import { AppRegistry } from 'react-native'
import App from './src/App'
import { name as appName } from './app.json'
import { Provider } from 'mobx-react'
import stores from './src/stores'

const MobX = () => (<Provider {...stores}>
    <App/>
</Provider>)

AppRegistry.registerComponent(appName, () => MobX)