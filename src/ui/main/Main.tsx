import React from 'react'
import { View, Text } from 'react-native'
import { observer, inject } from "mobx-react"

export default class Main extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Main Screen</Text>
      </View>
    )
  }
}
