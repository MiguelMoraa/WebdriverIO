import Actions from '../../../../API/Actions'

class EditPasswordModal extends Actions {
    constructor() {
        super()
    }

    get editPasswordHeader() { return 'id=headerLabel' }
    get existingPasswordField() { return 'id=currentPasswordField' }
    get newPasswordField() { return 'id=password' }
    get confirmPasswordField() { return 'id=confirmPassword' }
    get updatePasswordButton() { return 'id=saveButton' }

    async enterCurrentPassword(password) {
        await this.writeOnElement(this.existingPasswordField, password)
    }

    async enterNewPassword(password) {
        await this.writeOnElement(this.newPasswordField, password)
        await this.writeOnElement(this.confirmPasswordField, password)
    }

    async updateChanges() {
        await this.tapElement(this.updatePasswordButton)
    }
}

export default new EditPasswordModal()
