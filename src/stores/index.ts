import LoginStore from "./LoginStore"
import MainStore from "./MainStore"
import AppStore from "./AppStore"

export default {
    appStore: new AppStore(),
    loginStore: new LoginStore(),
    mainStore: new MainStore()
}