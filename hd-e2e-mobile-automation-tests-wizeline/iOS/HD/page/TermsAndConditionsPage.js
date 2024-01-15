import Actions from '../../API/Actions'

class TermsAndConditionsPage extends Actions {
    constructor() {
        super()
    }

    get backArrow() { return '~Navigate up' }
    get agreementCheckBox() { return 'id=agreementCheckbox' }
    get continueTermsButton() { return 'id=continueButton' }
    get lastParragraph() { return 'android=new UiSelector().textContains("If you are a consumer")' }
    get provacyPolicyCTA() { return 'android=new UiSelector().textContains("PRIVACY POLICY")' }
    get urlBar() { return 'id=com.android.chrome:id/url_bar' }

    async checkPrivacyPolicy() {
        await this.tapElement(this.agreementCheckBox)
    }

    async tapOnContinueButton() {
        await this.tapElement(this.continueTermsButton)
    }

    async scrollToTermsAndConditions() {
        await this.swipeDownToElement(this.lastParragraph)
    }

    async tapOnBackArrow() {
        await this.tapElement(this.backArrow)
    }

    async tapPrivacyPolicy() {
        await this.tapElement(this.provacyPolicyCTA)
    }
}

export default new TermsAndConditionsPage()
