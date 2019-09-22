import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Login from './ui/login/Login'
import Main from './ui/main/Main'

const RootStack = createStackNavigator(
  {
    Login: Login,
    Main: Main
  },
  {
    initialRouteName: 'Login'
  }
)

const AppContainer = createAppContainer(RootStack)

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}

