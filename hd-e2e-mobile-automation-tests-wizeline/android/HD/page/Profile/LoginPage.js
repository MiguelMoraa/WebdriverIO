import Actions from '../../../API/Actions'
import CorePage from '../CorePage'

class LoginPage extends Actions {
    constructor() {
        super()
    }

    get loginHeader() { return 'id=loginText' }
    get emailField() { return 'id=emailField' }
    get passwordField() { return 'id=passwordField' }
    get loginButton() { return 'id=loginButton' }
    get createAnAccountButton() { return 'id=createAccountButton' }
    get forgotPassword() { return 'id=forgotPasswordButton' }

    async loginUser(user, password) {
        await this.fillEmailField(user)
        await this.fillPasswordField(password)
        await this.tapElement(this.loginButton)
        await CorePage.loadingProcess()
    }

    async fillEmailField(user) {
        await this.writeOnElement(this.emailField, user)
    }

    async fillPasswordField(psswd) {
        await this.writeOnElement(this.passwordField, psswd)
    }

    async tapOnCreateAnAccount() {
        await this.tapElement(this.createAnAccountButton)
    }

    async tapOnForgotPassword() {
        await this.tapElement(this.forgotPassword)
    }
}

export default new LoginPage()
