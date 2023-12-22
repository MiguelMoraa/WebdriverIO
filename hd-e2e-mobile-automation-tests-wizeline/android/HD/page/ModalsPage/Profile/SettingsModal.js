import Actions from '../../../../API/Actions'
import CorePage from '../../CorePage'

class SettingsModal extends Actions {
    constructor() {
        super()
    }

    get settingsHeader() { return 'id=headerLabel' }
    get languageButton() { return 'id=language_header' }
    get regionButton() { return 'id=region_header' }
    get measurementsButton() { return 'id=measurements_header' }
    get navVoiceButton() { return 'id=navigation_voice_header' }
    get offlineMapsButton() { return 'id=offlineMaps' }

    async tapOnLanguageMenu() {
        await this.tapElement(this.languageButton)
    }

    async tapOnRegionMenu() {
        await this.tapElement(this.regionButton)
    }

    async tapOnMeasurementsMenu() {
        await this.tapElement(this.measurementsButton)
    }

    async tapOnNavVoiceMenu() {
        await this.tapElement(this.navVoiceButton)
    }

    async tapOnOfflineMapsMenu() {
        await this.tapElement(this.offlineMapsButton)
        await CorePage.loadingProcess()
    }
}

export default new SettingsModal()
