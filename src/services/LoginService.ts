import { create, ApisauceInstance } from 'apisauce'
import { AsyncStorage } from 'react-native'
import { LoginUserData, UUserData } from '../model/UserModel'

class LoginService {
  api: ApisauceInstance
  constructor() {
    this.api = create({
      baseURL: 'http://18.138.101.214:80/api/v1'
    })
  }

  async login(emailPrimary: String, password: String): Promise<UUserData> {
    let res = await this.api.post<LoginUserData>('/auth/login', { emailPrimary: emailPrimary, password: password }, { headers: { 'x-auth-clientid': 'halo_clientid' } })
    if (res.ok && res.data !== null && res.data !== undefined) {
      await AsyncStorage.setItem('token', res.data!.token)
      await AsyncStorage.setItem('expiry', JSON.stringify(res.data!.expiry))
      await AsyncStorage.setItem('userId', res.data!.data._id)
      await AsyncStorage.setItem('refreshToken', res.data!.refreshToken)
      return res.data!.data
    } else {
       return undefined
    }
  }
}

export const loginService = new LoginService()