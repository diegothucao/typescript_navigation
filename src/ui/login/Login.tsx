import React from 'react'
import { View, StyleSheet } from 'react-native'
import { observer, inject } from "mobx-react"
import { Input, Button } from 'react-native-elements'
import LoginStore from '../../stores/LoginStore'

export interface Props {
  loginStore: LoginStore
}

class Login extends React.Component<Props> {
  static navigationOptions = {
    header: null
  }

  async componentDidMount() {
  }

  loginPress = () => {
    this.props.loginStore.login()
  }

  handleChangeEmail = (email: string) => {
    this.props.loginStore.setEmail(email)
  }

  handleChangePassword = (password: string) => {
    this.props.loginStore.setPassword(password)
  }

  render() {
    return (
      <View style={styles.mainArea} >
        <View style={styles.loginArea}>
          <Input
            placeholder='Email' autoCompleteType="email"
            keyboardType="email-address" autoCapitalize="none"
            defaultValue={this.props.loginStore.email.get()}
            onChangeText={this.handleChangeEmail}
          />
          <Input
            placeholder='Password' secureTextEntry={true} autoCompleteType="password"
            autoCapitalize="none"
            defaultValue={this.props.loginStore.password.get()}
            onChangeText={this.handleChangePassword}
          />
          <Button
            title="Login" style={styles.loginButton} onPress={this.loginPress}
          />
        </View>

      </View>
    )
  }
}

export default inject("loginStore")(observer(Login))

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
