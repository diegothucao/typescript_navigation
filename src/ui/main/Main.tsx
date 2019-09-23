import React from 'react'
import { View, Text } from 'react-native'
import { observer, inject } from "mobx-react"
import MainStore from '../../stores/MainStore'

export interface Props {
  mainStore: MainStore
}

class Main extends React.Component<Props> {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Main Screen</Text>
      </View>
    )
  }
}

export default inject("mainStore")(observer(Main))