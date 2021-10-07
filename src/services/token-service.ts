const TokenService = {
  saveAuthToken(token: string) {
    window.localStorage.setItem('secure_token', token)
  },
  getAuthToken() {
    return window.localStorage.getItem('secure_token')
  },
  clearAuthToken() {
    window.localStorage.removeItem('secure_token')
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken()
  },
  makeBasicAuthToken(userName: string, password: string) {
    return window.btoa(`${userName}:${password}`)
  },
}

export default TokenService