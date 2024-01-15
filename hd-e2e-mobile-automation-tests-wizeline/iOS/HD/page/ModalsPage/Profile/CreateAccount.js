import Actions from '../../../../API/Actions'
import { CREDENTIALS } from '../../../data/LoginData'

class CreateAccount extends Actions {
    constructor() {
        super()
    }

    get createAccountHeader() { return 'id=headerLabel' }
    get emailField() { return 'id=emailField' }
    get passwordField() { return 'id=password' }
    get confirmPasswordField() { return 'id=confirmPassword' }
    get firstNameField() { return 'id=firstNameField' }
    get lastnameField() { return 'id=lastNameField' }
    get birthdatField() { return 'id=birthdayField' }
    get bithdayHeader() { return 'id=android:id/alertTitle' }
    get editedYearField() { return 'android=new UiSelector().resourceId("android:id/numberpicker_input").instance(2)' }
    get confirmBirthdayButton() { return 'id=android:id/button1' }
    get receiveHDEmailsCheckBox() { return 'id=emailOptIn' }
    get termsOfUseAgreementCheckBox() { return 'id=tosOptIn' }
    get createAnAccountButton() { return 'id=createAccountButton' }
    get errorMessage() { return 'id=android:id/message' }
    get confimrMessageButton() { return 'id=android:id/button1' }

    async createANewAccount() {
        const newEmail = 'test' + Math.random() + '@hotmail.com'
        await this.writeOnElement(this.emailField, newEmail)
        await this.writeOnElement(this.passwordField, process.env.WIZELINE_PASSWORD)
        await this.writeOnElement(this.confirmPasswordField, process.env.WIZELINE_PASSWORD)
        await this.writeOnElement(this.firstNameField, process.env.NEW_NAME)
        await this.writeOnElement(this.lastnameField, process.env.LAST_NAME)
        await this.setBithDayYear()
        await this.tapElement(this.receiveHDEmailsCheckBox)
        await this.swipeDownToElementAndTap(this.termsOfUseAgreementCheckBox)
        await this.swipeDownToElementAndTap(this.createAnAccountButton)
        return newEmail
    }

    async fillEmailField() {
        const newEmail = 'test' + Math.random() + '@hotmail.com'
        await this.writeOnElement(this.emailField, newEmail)
    }

    async fillPasswordField(password, match) {
        const pswd = 'match' === match ? CREDENTIALS.INCORECT.PASSWORD[6] : password
        const confirm = 'confirm' === match ? CREDENTIALS.INCORECT.PASSWORD[5] : password
        await this.writeOnElement(this.passwordField, pswd)
        await this.writeOnElement(this.confirmPasswordField, confirm)
    }

    async scrollTofillPassword() {
        await this.swipeUpToElement(this.passwordField)
    }

    async fillUserName() {
        await this.fillFirstName()
        await this.fillLastName()
    }

    async fillFirstName(missing) {
        const first = 'empty' === missing ? '' : process.env.NEW_NAME
        await this.writeOnElement(this.firstNameField, first)
    }

    async fillLastName(missing) {
        const last = 'empty' === missing ? '' : process.env.LAST_NAME
        await this.writeOnElement(this.lastnameField, last)
    }

    async setBithDayYear() {
        await this.tapElement(this.birthdatField)
        await this.findElement(this.bithdayHeader)
        const yearLocation = await this.getElementLocation(this.editedYearField)
        const okLocation = await this.getElementLocation(this.confirmBirthdayButton)
        for (let i = 0 ; i < 5 ; i++) {
            await this.swipeScreen(yearLocation.x, yearLocation.y, okLocation.x, okLocation.y)
        }
        await this.tapElement(this.confirmBirthdayButton)
    }

    async checkTermOfUse() {
        await this.swipeDownToElementAndTap(this.termsOfUseAgreementCheckBox)
    }

    async tapOnCreateAccount() {
        await this.swipeDownToElementAndTap(this.createAnAccountButton)
    }

    async tapOnConfirmMessage() {
        await this.tapElement(this.confimrMessageButton)
    }
}

export default new CreateAccount()
