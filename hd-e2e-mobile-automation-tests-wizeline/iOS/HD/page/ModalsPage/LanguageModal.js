import Actions from '../../../API/Actions'

class LanguageModal extends Actions {
    constructor() {
        super()
    }

    get languageHeader() { return 'id=headerLabel' }
    get language() { return ['//*[@text="Spanish (Mexico)"]',
        '//*[@text="Spanish (Mexico)"]',
        '//*[@text="Portuguese (Brazil)"]',
        '//*[@text="Italian"]'] }
    get languages() { return ['//*[@text="Arabic"]',
        '//*[@text="الصينية (التقليدية)"]',
        '//*[@text="捷克語"]',
        '//*[@text="Dánština"]',
        '//*[@text="Hollandsk"]',
        '//*[@text="Engels (VK)"]',
        '//*[@text="English (USA)"]',
        '//*[@text="Finnish"]',
        '//*[@text="kanadan ranska"]',
        '//*[@text="Français (France)"]',
        '//*[@text="Allemand"]',
        '//*[@text="Ungarisch"]',
        '//*[@text="olasz"]',
        '//*[@text="Giapponese"]',
        '//*[@text="ノルウェー語"]',
        '//*[@text="Polsk"]',
        '//*[@text="portugalski"]',
        '//*[@text="Português (Brasil)"]',
        '//*[@text="Russo"]',
        '//*[@text="Испанский (Мексика)"]',
        '//*[@text="Español (España)"]',
        '//*[@text="Sueco"]',
        '//*[@text="Thailändska"]',
        '//*[@text="เวียดนาม"]'] }
    get cancelButton() { return 'id=android:id/button2' }
    get confirmChangeButton() { return 'id=android:id/button1' }

    async selectLanguage(language) {
        await this.swipeDownToElementAndTap(language)
    }

    async tapOnCancel() {
        await this.tapElement(this.cancelButton)
    }

    async tapOnConfirmLanguage() {
        await this.tapElement(this.confirmChangeButton)
    }

}

export default new LanguageModal()
