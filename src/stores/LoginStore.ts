import { loginService } from '../services/LoginService'
import { UUserData } from '../model/UserModel'
import { observable } from 'mobx'

export default class LoginStore {
    @observable user: UUserData
    constructor() {
    }

    login = () => {
        loginService.login("", "").then(
          data => {
            this.user = data
          }
        )
      }
}