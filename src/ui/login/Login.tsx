import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { observer, inject } from "mobx-react"
import { Input, Button } from 'react-native-elements'

export default class Login extends React.Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View style={styles.mainArea} >
        <View style={styles.loginArea}>
          <Input
            placeholder='Email' autoCompleteType = "email" keyboardType = "email-address" autoCapitalize = "none"
          />
          <Input
            placeholder='Password' secureTextEntry={true} autoCompleteType = "password" autoCapitalize = "none"
          />
          <Button
            title="Login" style={styles.loginButton}
          />
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainArea: {
    width: "100%",
    height: "100%",
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: "aliceblue",

  },
  loginArea: {
    height: 200,
    marginLeft: 16,
    marginRight: 16,
    flexDirection: 'column'
  },

  loginButton: {
    width: 120,
    marginTop: 40,
    alignSelf: "center"
  }

})

