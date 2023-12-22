import Actions from '../../../API/Actions'


class ResetPasswordModal extends Actions {
    constructor() {
        super()
    }

    get emailField() { return 'id=emailField' }
    get resetPasswordButton() { return 'id=resetButton' }
    get invalidEmailMessage() { return 'id=errorLabel' }
    get popupMessage() { return 'id=snackbar_text' }

    async fillEmailAdress(password) {
        await this.writeOnElement(this.emailField, password)
    }

    async tapOnResetPassword() {
        await driver.pause(500)
        await this.tapElement(this.resetPasswordButton)
    }
}

export default new ResetPasswordModal()
