import Actions from '../../../../API/Actions'

class EditAddressModal extends Actions {
    constructor() {
        super()
    }

    get editAddressHeader() { return 'id=headerLabel' }
    get address1Field() { return 'id=addressOneField' }
    get address2Field() { return 'id=addressTwoField' }
    get postalCodeField() { return 'id=postalCodeField' }
    get cityField() { return 'id=cityField' }
    get stateField() { return 'id=stateField' }
    get countryField() { return 'id=countryTextInputLayout' }
    get mexicofield() { return '//*[@text="Mexico"]' }
    get startField() { return '//*[@text="Czech Republic"]' }
    get endField() { return '//*[@text="Belgium"]' }
    get phoneField() { return 'id=phoneNumberField' }
    get saveChangesButton() { return 'id=saveAddressButton' }

    async fillAddress(address) {
        const address1 = 'GDL' === address ? process.env.GDL_ADDRESS1 : process.env.CDMX_ADDRESS1
        const address2 = 'GDL' === address ? process.env.GDL_ADDRESS2 : process.env.CDMX_ADDRESS2
        const postalcode = 'GDL' === address ? process.env.GDL_ZIP_CODE : process.env.CDMX_ZIP_CODE
        const city = 'GDL' === address ? process.env.GDL_CITY : process.env.CDMX_CITY
        const phone = 'GDL' === address ? process.env.GDL_PHONE : process.env.CDMX_PHONE
        await this.writeOnElement(this.address1Field, address1)
        await this.writeOnElement(this.address2Field, address2)
        await this.writeOnElement(this.postalCodeField, postalcode)
        await this.writeOnElement(this.cityField, city)
        await this.tapElement(this.countryField)
        if (await $(this.mexicofield).isExisting() === false) {
            const startLocation = await $(this.startField).getLocation()
            const endLocation = await $(this.endField).getLocation()
            await this.swipeDownToElementAndTap(this.mexicofield, startLocation.x, startLocation.y, endLocation.x, endLocation.y)
        }
        else {
            await this.tapElement(this.mexicofield)
        }
        await this.swipeDownToElement(this.phoneField)
        await this.writeOnElement(this.phoneField, phone)
        await this.swipeDownToElementAndTap(this.saveChangesButton)
    }
}

export default new EditAddressModal()
