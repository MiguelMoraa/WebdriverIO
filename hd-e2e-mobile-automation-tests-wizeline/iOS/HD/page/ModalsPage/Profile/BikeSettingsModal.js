import Actions from '../../../../API/Actions'

class BikeSettingsModal extends Actions {
    constructor() {
        super()
    }

    get bikeSettingsHeader() { return 'id=headerLabel' }
    get primaryBikeToggle() { return 'id=primaryChecked' }
    get deleteBikeButton() { return 'id=deleteButton' }
    get confirmDeleteBike() { return 'id=android:id/button1' }
    get saveChangesButton() { return 'id=saveButton' }

    async activeMakeItPrimaryBike() {
        await this.tapElement(this.primaryBikeToggle)
        await this.tapElement(this.saveChangesButton)
    }

    async deleteBike() {
        await this.tapElement(this.deleteBikeButton)
        await this.tapElement(this.confirmDeleteBike)
    }
}

export default new BikeSettingsModal()
