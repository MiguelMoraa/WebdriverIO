import Actions from '../../../../API/Actions'

class EditEmailModal extends Actions {
    constructor() {
        super()
    }

    get editEmailHeader() { return 'id=headerLabel' }
    get editEmailPasswordEditField() { return 'id=currentPassword' }
    get verifyNowButton() { return 'id=verifyIdentity' }
    get updateEmailButton() { return 'id=save' }
    get newEmailField() { return 'id=newEmail' }
    get reTypeNewEmailField() { return 'id=newEmailConfirm' }

    async enterPassword(password) {
        await this.writeOnElement(this.editEmailPasswordEditField, password)
        await this.tapElement(this.verifyNowButton)
    }

    async changeEmail(email) {
        await this.writeOnElement(this.newEmailField, email)
        await this.writeOnElement(this.reTypeNewEmailField, email)
    }

    async updateChanges() {
        await this.tapElement(this.updateEmailButton)
    }
}

export default new EditEmailModal()
