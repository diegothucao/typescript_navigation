import React from 'react'
import { View, Text } from 'react-native'
import { observer, inject } from "mobx-react"

@inject("loginStore") @observer
export default class Login extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login Screen</Text>
      </View>
    )
  }
}
