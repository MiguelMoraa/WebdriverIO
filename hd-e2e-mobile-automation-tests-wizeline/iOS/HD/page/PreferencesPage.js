import Actions from '../../API/Actions'

class PreferencesPage extends Actions {
    constructor() {
        super()
    }

    get languageMenu() { return 'id=languageViewGroup' }
    get language() { return 'android.widget.LinearLayout' }
    get region() { return 'id=regionTextView' }
    get regionMenu() { return 'id=regionViewGroup' }
    get continueButton() { return 'id=continueButton' }
    get confirmChange() { return 'id=android:id/button1' }
    get measurementsMenu() { return 'id=measurementsViewGroup' }
    get measurementTexts() { return 'id=measurementsTextView' }

    async getRegion() {
        const REGION = await this.getElementText(this.region)
        return REGION
    }
    async getMeasures() {
        const MEASURE = await this.getElementText(this.measurementTexts)
        return MEASURE
    }

    async tapOnContinue() {
        await this.tapElement(this.continueButton)
    }

    async tapOnConfirmChanges() {
        await this.tapElement(this.confirmChange)
    }

    async tapOnRegionMenu() {
        await this.tapElement(this.regionMenu)
    }

    async tapOnLanguageMenu() {
        await this.tapElement(this.languageMenu)
    }

    async tapOnMeasurementsMenu() {
        await this.tapElement(this.measurementsMenu)
    }

}

export default new PreferencesPage()
