class LoginPage {
  get email () { return $('[type="email"]') }
  get password () { return $('[type="password"]') }
  get nextButton () { return $('#identifierNext') }
  get submitButton () { return $('#passwordNext') }
  get signinButton () { return $('.style-scope #end ytd-button-renderer') }

  async inputEmail (email) {
      await this.email.waitForDisplayed();
      await this.email.setValue(email);
      await this.nextButton.waitForDisplayed();
      await this.nextButton.click();
  }

  async inputPassword (password) {
      await this.password.waitForDisplayed();
      await this.password.setValue(password);
      await this.submitButton.waitForDisplayed();
      await this.submitButton.click();
  }

  async clickSignin () {
      await this.signinButton.waitForDisplayed();
      await this.signinButton.click();
  }

  async login(email, password) {
      await this.clickSignin();
      await this.inputEmail(email);
      await this.inputPassword(password);
  }
}

export default LoginPage;