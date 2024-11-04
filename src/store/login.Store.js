import { makeAutoObservable } from 'mobx'
class LoginStore {
  token = ''
  constructor() {
    makeAutoObservable(this)
  }
  setToken = ({ username, passsword }) => {
    
  }
}

export default LoginStore