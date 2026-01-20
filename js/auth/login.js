export class Login {
  login(username) {
    localStorage.setItem("user", username)
  }
}
