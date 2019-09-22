import React from 'react'
import { View, StyleSheet } from 'react-native'
import { observer, inject } from "mobx-react"
import { Input, Button } from 'react-native-elements'
import LoginStore from '../../stores/LoginStore'

export interface Props {
  loginStore: LoginStore
}

@inject("loginStore") @observer
export default class Login extends React.Component<Props> {
  static navigationOptions = {
    header: null
  }

  async componentDidMount() {
  }

  LoginPress = () => {
    this.props.loginStore.login()
  }

  render() {
    return (
      <View style={styles.mainArea} >
        <View style={styles.loginArea}>
          <Input
            placeholder='Email' autoCompleteType="email" keyboardType="email-address" autoCapitalize="none"
          />
          <Input
            placeholder='Password' secureTextEntry={true} autoCompleteType="password" autoCapitalize="none"
          />
          <Button
            title="Login" style={styles.loginButton} onPress={this.LoginPress}
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

