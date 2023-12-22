import Actions from '../../../../API/Actions'
import { SERVICE } from '../../../data/BikeData'

class ScheduleServiceModal extends Actions {
    constructor() {
        super()
    }

    get scheduleServiceHeader() { return 'id=headerLabel' }
    get NYDealer() { return '//*[@text="NEW YORK CITY HARLEY-DAVIDSON"]' }
    get mississaguaDealer() { return '//*[@text="MISSISSAUGA HARLEY-DAVIDSON"]' }
    get oshawaDealer() { return '//*[@text="DURHAM HARLEY-DAVIDSON"]' }
    get phoneNumberField() { return 'id=user_phone_edit' }
    get phoneRatioButton() { return 'id=contact_option_phone' }
    get serviceDescriptionField() { return 'id=serviceNeedsText' }
    get submitButton() { return 'id=submitButton' }
    get dealerMessage() { return 'id=android:id/message' }
    get confirmButton() { return 'id=android:id/button1' }
    get searchIcon() { return 'id=searchIcon' }
    get contactDealerText() { return 'id=title' }

    async selectDealer(dealer) {
        switch (dealer) {
            case 'NY':
                await this.tapElement(this.NYDealer)
                break
            case 'Mississagua':
                await this.swipeDownToElementAndTap(this.mississaguaDealer)
                break
            case 'Oshawa':
                await this.swipeDownToElementAndTap(this.oshawaDealer)
                break
            default:
                break
        }
    }

    async fillServiceForm() {
        await this.writeOnElement(this.phoneNumberField, process.env.GDL_PHONE)
        await this.tapElement(this.phoneRatioButton)
        await this.swipeDownToElement(this.serviceDescriptionField)
        await this.writeOnElement(this.serviceDescriptionField, SERVICE.DESCRIPTION_SERVICE)
        await this.tapElement(this.submitButton)
    }

    async tapOnConfirmService() {
        await this.tapElement(this.confirmButton)
    }

    async tapOnSearch() {
        await this.tapElement(this.searchIcon)
    }
}

export default new ScheduleServiceModal()
