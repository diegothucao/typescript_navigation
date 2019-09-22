import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { observer, inject } from "mobx-react"

export default class Login extends React.Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View style = {styles.mainArea} >
        <View style={styles.loginArea}></View>
      </View>
    )
  }
}

  const styles = StyleSheet.create({
    mainArea: {
      width : "100%",
      height : "100%",
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: "aliceblue",
     
    },
    loginArea: {
      height:  150,
      marginLeft: 16,
      marginRight: 16,
      backgroundColor: "white"
    }
  })

