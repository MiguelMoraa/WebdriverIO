import Actions from '../../../../API/Actions'

class BikeInfoModal extends Actions {
    constructor() {
        super()
    }

    get bikeName() { return 'id=title' }
    get bikeSettingIcon() { return 'id=settingsIcon' }
    get reactiveHDConnectLink() { return 'id=reactivate' }
    get cancelButton() { return 'id=android:id/button2' }
    get scheduleServiceButton() { return 'id=scheduleService' }

    async tapOnBikeSettings() {
        await this.tapElement(this.bikeSettingIcon)
    }

    async tapOnReactiveHDConnect() {
        await this.tapElement(this.reactiveHDConnectLink)
    }

    async cancelConnection() {
        await this.tapElement(this.cancelButton)
    }

    async tapOnScheduleService() {
        await this.swipeDownToElementAndTap(this.scheduleServiceButton)
    }
}

export default new BikeInfoModal()
