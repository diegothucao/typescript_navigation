import { loginService } from '../services/LoginService'
import { UUserData } from '../model/UserModel'
import { observable, IObservableValue, action } from 'mobx'

export default class LoginStore {
  @observable email: IObservableValue<string> = observable.box("cao.trung.thu@gmail.com")
  @observable password: IObservableValue<string> = observable.box("")
  @observable user: UUserData
  constructor() {
  }

  login = () => {
    loginService.login(this.email.get(), this.password.get()).then(
      data => {
        console.log(data)
        this.user = data
      }
    )
  }

  @action setPassword(password: string) {
    this.password.set(password)
  }

  @action setEmail(email: string) {
    this.email.set(email)
  }

}