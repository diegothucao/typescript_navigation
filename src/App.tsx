import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Login from './ui/login/Login'
import Main from './ui/main/Main'
import { observer, inject } from "mobx-react"
import AppStore from './stores/AppStore'

const RootStack = createStackNavigator(
  {
    login: Login,
    main: Main
  },
  {
    initialRouteName: 'login'
  }
)

const AppContainer = createAppContainer(RootStack)

export interface Props {
  appStore: AppStore
}

@inject("appStore") @observer
export default class App extends React.Component<Props> {
  render() {
    return <AppContainer />
  }
}

